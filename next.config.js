const withSass = require('@zeit/next-sass');
module.exports = withSass({ cssModules: true });
const withImages = require('next-images');
module.exports = withImages();

module.exports = {
  reactStrictMode: true,
  env: {
    MOCK_PUBLIC_BASE_API: process.env.MOCK_PUBLIC_BASE_API,
    PUBLIC_BASE_API: process.env.PUBLIC_BASE_API,
  },
};
