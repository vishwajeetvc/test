import express from 'express'
import http from 'node:http'
import { Server } from 'socket.io'
import { socket } from './controllers/socket.js';
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const server = http.createServer(app);

export const io = new Server(server, {
  cors: {
    origin: '*', 
    methods: ['GET', 'POST'],
  },
});

io.on('connection', socket);
//app.use(express.static('./public'))

server.listen(3000, ()=>{
  console.log("Running on 3000");
})

