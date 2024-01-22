// vue.config.js
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => {
        // Ajoutez les options nécessaires pour vue-loader ici
        return options;
      });
  },
});
