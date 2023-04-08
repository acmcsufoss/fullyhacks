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
      },
      {
        source: '/teamforming',
        destination: 'https://forms.gle/nox2oKFJdyyeAvQt9',
        permanent: true
      },
      {
        source: '/projectform',
        destination: 'https://forms.gle/s6qTwJbf7TDHs3dT9',
        permanent: true
      },
      {
        source: '/opening',
        destination:
          'https://www.canva.com/design/DAFe5xstJ38/mJqwCHRVGnmUnHcGI7GbyA/view?utm_content=DAFe5xstJ38&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink',
        permanent: true
      },
      {
        source: '/nextjs',
        destination:
          'https://www.canva.com/design/DAFfUTCnxRM/dOmLiwmTcAK6OZAuy84QZw/view?utm_content=DAFfUTCnxRM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink',
        permanent: true
      },
      {
        source: '/mobiledev',
        destination:
          'https://docs.google.com/presentation/d/14KNA1VjsvGRGFQsj8Yi7p0aFqW-nejssvCfwXHkbPYE/edit?usp=sharing',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
