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
      },
      {
        source: '/androiddev',
        destination:
          'https://docs.google.com/presentation/d/14KNA1VjsvGRGFQsj8Yi7p0aFqW-nejssvCfwXHkbPYE/edit#slide=id.p',
        permanent: true
      },
      {
        source: '/introtopython',
        destination:
          'https://docs.google.com/presentation/d/1VRpyLBAA4Uhsz6oTms5B6er51ncSDJa3la1Sx_zLr3c/edit#slide=id.ga073618e60_0_16',
        permanent: true
      },
      {
        source: '/internship101',
        destination:
          'https://www.canva.com/design/DAF9mD1iGY4/XSx5RXLVWaSx18EygQoYtw/view?utm_content=DAF9mD1iGY4&utm_campaign=designshare&utm_medium=link&utm_source=editor',
        permanent: true
      },
      {
        source: '/iosdev',
        destination:
          'https://www.canva.com/design/DAF9mD1iGY4/XSx5RXLVWaSx18EygQoYtw/view?utm_content=DAF9mD1iGY4&utm_campaign=designshare&utm_medium=link&utm_source=editor',
        permanent: true
      },
      {
        source: '/sqlite',
        destination:
          'https://docs.google.com/presentation/d/1-zB-HKooFSi0vnWJlnby0HaYlHnuj5KoyMPAQvwL_AE/edit?usp=sharing',
        permanent: true
      },
      {
        source: '/sveltekit',
        destination:
          'https://docs.google.com/presentation/d/1X7AQ1yP7b-QU9oV_0dQn43bYQYVwaB2l_5ZsGi4Yhe0/edit?usp=sharing',
        permanent: true
      },
      {
        source: '/concepttoproject',
        destination:
          'https://docs.google.com/presentation/d/1UZz9EG6FlJisbmFXSl8cjGB4QqlpWJxXt1FoHcBxm74/edit?usp=sharing',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
