import express from 'express'
import UsersMock from '../mocks/usersMock.js'

const router = express.Router()
const usersMock = new UsersMock()

router.post('/popular',(req,res)=>{
    let result = usersMock.popular(10)
    res.send(result)
})

router.get('/',(req,res)=>{
    res.send(usersMock.listarAll())
})

export default router