"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Hero background: a drifting "connected network" constellation — nodes float
 * and draw links to nearby nodes (echoing InnCentral connecting every channel).
 * Brand-coloured nodes, faint ink links, gentle mouse parallax. Pauses when
 * off-screen or the tab is hidden, respects reduced-motion, disposes on unmount.
 */
export function HeroThree() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const w = () => el.clientWidth || 1;
    const h = () => el.clientHeight || 1;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, w() / h(), 0.1, 100);
    camera.position.z = 14;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w(), h());
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    el.appendChild(renderer.domElement);

    // Soft round sprite for glowing nodes
    const sprite = (() => {
      const c = document.createElement("canvas");
      c.width = c.height = 64;
      const ctx = c.getContext("2d")!;
      const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      g.addColorStop(0, "rgba(255,255,255,1)");
      g.addColorStop(0.35, "rgba(255,255,255,0.85)");
      g.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(32, 32, 32, 0, Math.PI * 2);
      ctx.fill();
      return new THREE.CanvasTexture(c);
    })();

    const N = window.innerWidth < 768 ? 60 : 100;
    const BX = 15, BY = 8.5, BZ = 5;
    const palette = [
      new THREE.Color(0x007bff),
      new THREE.Color(0x0a4fd6),
      new THREE.Color(0x1e3a8a),
      new THREE.Color(0x0a0d16),
    ];

    const pos = new Float32Array(N * 3);
    const vel = new Float32Array(N * 3);
    const nodeColors = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 2 * BX;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 2 * BY;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 2 * BZ;
      vel[i * 3] = (Math.random() - 0.5) * 0.02;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
      const col = palette[Math.floor(Math.random() * palette.length)];
      nodeColors[i * 3] = col.r;
      nodeColors[i * 3 + 1] = col.g;
      nodeColors[i * 3 + 2] = col.b;
    }

    const nodeGeo = new THREE.BufferGeometry();
    const posAttr = new THREE.BufferAttribute(pos, 3);
    nodeGeo.setAttribute("position", posAttr);
    nodeGeo.setAttribute("color", new THREE.BufferAttribute(nodeColors, 3));
    const nodeMat = new THREE.PointsMaterial({
      size: 0.4,
      map: sprite,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      depthWrite: false,
      sizeAttenuation: true,
    });
    const nodes = new THREE.Points(nodeGeo, nodeMat);
    scene.add(nodes);

    // Links between nearby nodes (rebuilt each frame)
    const MAX_SEG = 1800;
    const linkPos = new Float32Array(MAX_SEG * 2 * 3);
    const linkGeo = new THREE.BufferGeometry();
    const linkAttr = new THREE.BufferAttribute(linkPos, 3);
    linkAttr.setUsage(THREE.DynamicDrawUsage);
    linkGeo.setAttribute("position", linkAttr);
    const linkMat = new THREE.LineBasicMaterial({
      color: 0x0a1a3d,
      transparent: true,
      opacity: 0.16,
      depthWrite: false,
    });
    const links = new THREE.LineSegments(linkGeo, linkMat);
    scene.add(links);

    const TH = 3.7;
    const TH2 = TH * TH;

    let targetX = 0;
    let targetY = 0;
    const onMove = (e: PointerEvent) => {
      targetX = e.clientX / window.innerWidth - 0.5;
      targetY = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const onResize = () => {
      camera.aspect = w() / h();
      camera.updateProjectionMatrix();
      renderer.setSize(w(), h());
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(el);

    const step = () => {
      // drift + bounce
      for (let i = 0; i < N; i++) {
        const ix = i * 3, iy = i * 3 + 1, iz = i * 3 + 2;
        pos[ix] += vel[ix];
        pos[iy] += vel[iy];
        pos[iz] += vel[iz];
        if (pos[ix] > BX || pos[ix] < -BX) vel[ix] *= -1;
        if (pos[iy] > BY || pos[iy] < -BY) vel[iy] *= -1;
        if (pos[iz] > BZ || pos[iz] < -BZ) vel[iz] *= -1;
      }
      posAttr.needsUpdate = true;

      // rebuild links
      let s = 0;
      for (let i = 0; i < N && s < MAX_SEG; i++) {
        const ax = pos[i * 3], ay = pos[i * 3 + 1], az = pos[i * 3 + 2];
        for (let j = i + 1; j < N && s < MAX_SEG; j++) {
          const dx = ax - pos[j * 3];
          const dy = ay - pos[j * 3 + 1];
          const dz = az - pos[j * 3 + 2];
          if (dx * dx + dy * dy + dz * dz < TH2) {
            const o = s * 6;
            linkPos[o] = ax; linkPos[o + 1] = ay; linkPos[o + 2] = az;
            linkPos[o + 3] = pos[j * 3]; linkPos[o + 4] = pos[j * 3 + 1]; linkPos[o + 5] = pos[j * 3 + 2];
            s++;
          }
        }
      }
      linkAttr.needsUpdate = true;
      linkGeo.setDrawRange(0, s * 2);

      camera.position.x += (targetX * 2 - camera.position.x) * 0.03;
      camera.position.y += (-targetY * 1.2 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };

    let raf = 0;
    let running = false;
    let visible = true;
    const loop = () => {
      step();
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (!running && visible && !document.hidden) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; visible ? start() : stop(); });
    io.observe(el);
    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);

    if (reduce) step();
    else start();

    return () => {
      stop();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onMove);
      ro.disconnect();
      nodeGeo.dispose();
      nodeMat.dispose();
      linkGeo.dispose();
      linkMat.dispose();
      sprite.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        maskImage: "linear-gradient(to bottom, #000 0%, #000 44%, transparent 74%)",
        WebkitMaskImage: "linear-gradient(to bottom, #000 0%, #000 44%, transparent 74%)",
      }}
    />
  );
}
