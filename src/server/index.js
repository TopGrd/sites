// https://segmentfault.com/a/1190000013531894
// https://github.com/crsandeep/simple-react-full-stack
const Koa = require('koa')
const koaWebpack = require('koa-webpack')
const webpack = require('webpack')
const config = require('../webpack/dev.js')

const compiler = webpack(config)

const app = new Koa()

app.use(koaWebpack({ compiler }))

app.listen(3000)

console.log('lostening on port 3000')
