import express from 'express'
import userRouter from './routes/users.js'

const app = express()
const server = app.listen(8080,()=>console.log("Now listening"))

app.use(express.json())
app.use('/api/usuarios', userRouter)