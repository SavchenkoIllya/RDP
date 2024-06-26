const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/Components/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
      "@pages": path.resolve(__dirname, "src/Pages/"),
      "@slices": path.resolve(__dirname, "src/utils/redux/slices/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@locales": path.resolve(__dirname, "src/Locales/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
    },
  },
};
