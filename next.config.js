const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  images: {
    deviceSizes: [640, 750, 828, 1080],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ["https://dimihk.github.io/"],
  },
  reactStrictMode: true,
});
