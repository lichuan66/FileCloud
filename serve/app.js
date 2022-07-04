// 整个服务端的入口文件
const koa = require('koa2')  // 引入koa2
const app = new koa()  // 声明一个实例
const Router = require('koa-router')
const router = new Router()
const port = 4000 // 端口号
const path = require('path')
const fs = require('fs')
const cors = require('Koa2-Cors')
const readFolderCount = require('./utils/readFolderCount')
const renameFolder = require('./utils/renameFolder')
const createFolder = require('./utils/createFolder')
const bodyParser = require('koa-bodyparser')

/**
 * use()就是调用router中间件
 * router.routes()作用是启动路由
 * router.allowedMethods()作用是允许任何请求(例如:get,post,put)
 */

app.use(async (ctx, next) => {
    console.log('客户端和服务端已连接');
    await next()
})
app.use(cors())  // 设置跨域
app.use(bodyParser())  // 设置post参数的转换中间件

var userName = 'lca66'
var storePath = path.join(__dirname, `storeFile`, `${userName}`, `我的网盘`)

// router.get('/firstpage', async (ctx, next) => {
//     const userName = 'lca66'
//     const storePath = path.join(__dirname, `storeFile`, `${userName}`, `我的网盘`)
//     // const userName = 'lca66'
//     // 获取保存网盘文件的地址
//     // const storePath = path.join(__dirname, `storeFile`, `${userName}`, `我的网盘`)
//     // 遍历文件夹中的内容
//     const folderArr = await readFolderCount(storePath)
//     ctx.body = { folderArr, storePath }
// })

router.post('/updateFolder', async (ctx, next) => {
    const userName = 'lca66'
    const storePath = path.join(__dirname, `storeFile`, `${userName}`, `我的网盘`)
    const { id, newName } = ctx.query;
    // 遍历文件夹中的内容
    const msg = await renameFolder(storePath, newName, id)
    ctx.body = msg
})

router.post('/createFolder', async (ctx, next) => {
    const userName = 'lca66'
    const storePath = path.join(__dirname, `storeFile`, `${userName}`, `我的网盘`)
    const { newFolder } = ctx.query;
    const newStorePath = path.join(storePath, `${newFolder}`)
    const msg = await createFolder(newStorePath)
    ctx.body = msg
})

router.post('/enterFolder', async (ctx, next) => {
    const userName = 'lca66'
    const storePath = path.join(__dirname, `storeFile`, `${userName}`, `我的网盘`, `${newFolder}`)
    const { folder } = ctx.query;
    const nextStorePath = path.join(storePath, folder)
    console.log(nextStorePath);
    const folderArr = await readFolderCount(nextStorePath)
    ctx.body = { folderArr, nextStorePath }
})

router.post('/firstpage/myfile/hometown', async (ctx, next) => {
    const userName = 'lca66'
    const storePath = path.join(__dirname, `storeFile`, `${userName}`, `我的网盘`)
    const { folderPath, url } = ctx.query
    if (folderPath === '') {
        // console.log(storePath)
        // console.log(folderPath);
        const folderArr = await readFolderCount(storePath)
        ctx.body = { folderArr }
    } else {
        // console.log(storePath)
        // console.log(folderPath);
        const nextStorePath = path.join(storePath, folderPath)
        const folderArr = await readFolderCount(nextStorePath)
        // console.log(nextStorePath);
        ctx.body = { folderArr }
    }

    console.log(ctx.query);
})

router.redirect('/', '/firstpage')


app.use(router.routes()); //作用：启动路由
app.use(router.allowedMethods()); //作用： 当请求出错时的处理逻辑


app.listen(port, () => {
    console.log('服务端已经开启，端口号为' + port);
})

