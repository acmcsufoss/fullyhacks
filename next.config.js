/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  },
  async redirects() {
    return [
      {
        source: '/waiver',
        destination:
          'https://drive.google.com/file/d/13A98PnQGzv51LNBmOatM3Q3Jrby-A4cp/view?usp=share_link',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
