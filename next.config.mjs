/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // static HTML export -> works with Firebase Hosting free (Spark) plan
  trailingSlash: true, // /projects -> /projects/index.html, clean URLs on static hosts
  images: { unoptimized: true }, // next/image optimizer needs a server; not used on Spark
};

export default nextConfig;
