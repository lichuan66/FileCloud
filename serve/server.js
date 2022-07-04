const express = require('express')
const cors = require('cors')

const app = express()

app.use((req, res, next) => {
    console.log('客户端连接上服务端');
    next()
})
app.use(cors())

// 创建一个后端路由
app.get('/person', (req, res, next) => {
    console.log(req)
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "content-type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    res.send({
        name: '张三',
        age: 18
    })
    next()
})

app.listen(8000, err => {
    if (!err) console.log('服务器启动了！,服务端口是8000')
})