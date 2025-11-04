// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   output: 'export',
//   trailingSlash: true,
//   reactStrictMode: true,
//   // basePath: "/simplifyNEW",
//   // assetPrefix: "/simplifyNEW"
// };

// export default nextConfig;





/** @type {import('next').NextConfig} */

const isExport = process.env.NODE_ENV === 'production';

const basePath = isExport ? '/pulsify' : '';
const assetPrefix = isExport ? '/pulsify' : '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  basePath: basePath,
  assetPrefix: assetPrefix,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
