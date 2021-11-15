const withImages = require('next-images');
module.exports = withImages();

module.exports = {
  images: {
    loader: 'imgix',
    path: 'https://noop/',
  },
};
