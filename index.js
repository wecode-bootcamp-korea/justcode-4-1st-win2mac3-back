// const express = require("express");
// const router = express.Router(); //express 라우팅 기능을 사용하기 위해 router 가 필요하다.

// // const userRoute = require("./userRoute");
// const productRoute = require("../win2mac3-wecoview-back/routes/productRoute.js")
// // const orderRoute = require("./orderRoute");

// // router.use("/user", userRoute); // '/users' 엔드포인트를 처리하기 위해 UserRouter 를 붙여준다.
// router.use("/products", productRoute); // '/products' 엔드포인트를 처리하기 위해 ProductRouter를 붙여준다.

// module.exports = router; // export 한 router 는 express app 의 미들웨어로 사용된다.

// // productService.js

const http = require('http')
const express = require('express')
const { PrismaClient } = require('@prisma/client')
const routes = require('./routes')

const prisma = new PrismaClient()

const app = express()

app.use(express.json())
app.use(routes) // Route 에 의존성을 가집니다.

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' })
})

const server = http.createServer(app)
const PORT = process.env.PORT

const start = async () => { // 서버를 시작하는 함수입니다.
  try {
    server.listen(PORT, () => console.log(`Server is listening on ${PORT}`))
  } catch (err) { 
    console.error(err)
    await prisma.$disconnect() // 에러가 발생했을 시에 database 연결을 종료합니다.
  }
}

start()

