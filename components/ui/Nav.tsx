"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { PrimaryButton } from "./Button";
import { primaryNav, companyMenu, pagesMenu, site } from "@/lib/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled ? "border-b border-line bg-bg/80 backdrop-blur-md" : "border-b border-transparent bg-bg/60 backdrop-blur-md"
      }`}
    >
      <Container>
        <nav className="flex h-[68px] items-center justify-between gap-4" aria-label="Primary">
          <Logo />

          <div className="hidden items-center gap-1 lg:flex">
            {primaryNav.map((l) => (
              <NavItem key={l.href} href={l.href} active={pathname === l.href}>
                {l.label}
              </NavItem>
            ))}
            <Dropdown label="Company" items={companyMenu} />
            <Dropdown label="Pages" items={pagesMenu} />
          </div>

          <div className="hidden lg:block">
            <PrimaryButton href={site.ctaPrimary.href}>{site.ctaPrimary.label}</PrimaryButton>
          </div>

          <button
            type="button"
            className="lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <Burger open={open} />
          </button>
        </nav>
      </Container>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-bg lg:hidden">
          <Container>
            <div className="flex flex-col gap-1 py-4">
              {primaryNav.map((l) => (
                <MobileLink key={l.href} href={l.href}>{l.label}</MobileLink>
              ))}
              <MobileGroup label="Company" items={companyMenu} />
              <MobileGroup label="Pages" items={pagesMenu} />
              <div className="pt-3">
                <PrimaryButton href={site.ctaPrimary.href} className="w-full justify-center">
                  {site.ctaPrimary.label}
                </PrimaryButton>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

function NavItem({ href, active, children }: { href: string; active: boolean; children: string }) {
  return (
    <Link
      href={href}
      className={`rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors duration-200 hover:text-ink ${active ? "text-ink" : "text-ink-muted"}`}
    >
      {children}
    </Link>
  );
}

function Dropdown({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        className="flex items-center gap-1 rounded-full px-3.5 py-2 text-[15px] font-medium text-ink-muted transition-colors duration-200 hover:text-ink"
        aria-expanded={open}
        aria-haspopup="menu"
      >
        {label}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true">
          <path d="M3 4.5 6 7.5 9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div role="menu" className="absolute left-0 top-full min-w-[200px] pt-2">
          <div className="rounded-2xl border border-line bg-bg p-1.5 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.18)]">
            {items.map((item) => (
              <Link key={item.href} href={item.href} role="menuitem" className="block rounded-xl px-3 py-2 text-[14px] font-medium text-ink-muted transition-colors hover:bg-bg-tint hover:text-ink">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileLink({ href, children }: { href: string; children: string }) {
  return (
    <Link href={href} className="rounded-xl px-3 py-2.5 text-[16px] font-medium text-ink hover:bg-bg-tint">
      {children}
    </Link>
  );
}

function MobileGroup({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  return (
    <div className="px-3 py-2">
      <p className="mb-1 text-[12px] font-semibold uppercase tracking-wide text-ink-muted">{label}</p>
      <div className="flex flex-col">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="rounded-lg py-1.5 text-[15px] text-ink-muted hover:text-ink">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function Burger({ open }: { open: boolean }) {
  return (
    <span className="relative grid size-9 place-items-center rounded-full border border-line">
      <span className="relative block h-3 w-4">
        <span className={`absolute left-0 top-0 h-0.5 w-4 bg-ink transition-transform duration-200 ${open ? "translate-y-[5px] rotate-45" : ""}`} />
        <span className={`absolute bottom-0 left-0 h-0.5 w-4 bg-ink transition-transform duration-200 ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
      </span>
    </span>
  );
}
