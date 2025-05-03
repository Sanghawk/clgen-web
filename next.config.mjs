// next.config.mjs
import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1) keep your MDX/pageExtensions settings
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  // 2) add your redirect from “/” → “/changelogs"
  async redirects() {
    return [
      {
        source: '/',
        destination: '/changelog',
        permanent: true,  // 308 permanent redirect
      },
    ]
  },

  // …any other Next.js config you need
}

const withMDX = createMDX({
  // your MDX plugins, etc.
})

export default withMDX(nextConfig)