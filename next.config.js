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
          'https://drive.google.com/file/d/1Zpdzz3XeXahzEaPOyO60rNnXZNPjySCr/view?usp=sharing',
        permanent: true
      },
      {
        source: '/projectform',
        destination: 'https://forms.gle/bzpwPR4JYy8EQDt88',
        permanent: true
      },
      {
        source: '/opening',
        destination:
          'https://www.canva.com/design/DAF9OpZ4hEo/3jeYaPwIgiz2k-B86x3uVA/edit?utm_content=DAF9OpZ4hEo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
