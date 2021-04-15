const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

io.on('connection', socket => {
  console.log('User connection', socket.id)
})

http.listen(8080, err => {
  if (err) {
    throw Error(err)
  }
  console.log('Сервер Запущен')
})
