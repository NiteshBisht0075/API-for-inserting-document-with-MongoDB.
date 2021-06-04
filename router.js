const koa = require('koa')
const Router =require('koa-router')
const koaBody =require('koa-body')
require('./confi/DataBase')
const controller = require('./controller/DataController')
// const Router = require('koa-router')
const app = new koa();
const router = new Router();
const port = 8000;

router.post('/data-add',controller.data)
module.exports = router.routes()

app.use(koaBody({multipart:true}))
app.use(router.routes())
.use(router.allowedMethods());
app.listen(port,() =>{
console.log(`${port}`)
})