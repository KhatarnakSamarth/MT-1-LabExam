import http from 'http'
import fs from 'fs'

const server = http.createServer((req, res)=>{
    res.end('Hello World')
})

server.listen(3000, ()=>{
    console.log("Server started Successfully at Port: 3000")
})