// https://github.com/shellscape/koa-webpack
const Koa = require('koa');
const koaWebpack = require('koa-webpack');
const webpack = require('webpack');
const serve = require('koa-static');
const config = require('../../webpack/dev.js');

const compiler = webpack(config);

const start = async () => {
  const app = new Koa();
  app.use(serve('./dist'));

  const middleware = await koaWebpack({
    compiler,
    // https://github.com/webpack/webpack-dev-middleware
    devMiddleware: {
      logLevel: 'error',
    },
    // https://github.com/webpack-contrib/webpack-hot-client
    hotClient: {
      logLevel: 'error',
    },
  });

  app.use(middleware);
  app.listen(3000);
  console.log('server listening on port 3000');
};

start();
