/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    if (!isServer) {
      config.externals = {
        next: 'next',
        react: 'React',
        'react-dom': 'ReactDOM'
      }
    }
    return config;
  }
}
