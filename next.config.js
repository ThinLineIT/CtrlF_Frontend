const withSass = require('@zeit/next-sass');
module.exports = withSass({ cssModules: true });

module.exports = {
  reactStrictMode: true,
<<<<<<< HEAD
};
=======
}

module.exports = {
  env: {
    MOCK_PUBLIC_BASE_API: process.env.MOCK_PUBLIC_BASE_API,
    PUBLIC_BASE_API: process.env.PUBLIC_BASE_API
  },
};
>>>>>>> dev
