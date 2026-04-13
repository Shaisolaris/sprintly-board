/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/sprintly-board',
  assetPrefix: '/sprintly-board/',
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
}
export default nextConfig
