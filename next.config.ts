import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Static HTML export creating /out folder used to deploy the landing page on Netlify
  // Important to make images unoptimized as they will be broken otherwise
  // output: "export",
  // images: { unoptimized: true },
  trailingSlash: true,

  webpack(config) {
    // Treat SVGs as react components
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
