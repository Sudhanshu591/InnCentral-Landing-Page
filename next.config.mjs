/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The Framer mirror lives in the repo for reference; keep it out of the build.
  outputFileTracingExcludes: {
    "*": ["./framer-mirror/**"],
  },
};

export default nextConfig;
