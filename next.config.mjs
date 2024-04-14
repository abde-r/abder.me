/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: function(config) {
    config.module.rules.push({
      test: /\.mdx$/,
      use: 'raw-loader',
    })
    return config
  }
};

export default nextConfig;

// module.exports = {
//   webpack: function(config) {
//     config.module.rules.push({
//       test: /\.md$/,
//       use: 'raw-loader',
//     })
//     return config
//   }
// };
