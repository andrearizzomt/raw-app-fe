import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Static HTML export creating /out folder used to deploy the landing page on Netlify
  // Important to make images unoptimized as they will be broken otherwise
  // output: "export",
  // images: { unoptimized: true },
};

export default nextConfig;
