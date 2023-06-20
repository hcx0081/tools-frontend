const { defineConfig } = require('@vue/cli-service');

const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: true,
  devServer: {
    host: '0.0.0.0',
    port: 80,
    open: true,
    proxy: {
      ['/dev-api']: {
        target: `http://localhost:9350`,
        pathRewrite: {
          ['^' + '/dev-api']: ''
        },
        changeOrigin: true,
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
  }
});
