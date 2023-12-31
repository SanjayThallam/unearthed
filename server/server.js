import express from 'express'
import './config/dotenv.js'
import giftsRouter from './routes/gifts.js'
import cors from 'cors'
app.use(express.json())
const app = express()
app.use('/public', express.static('./public'))

//app.use('/scripts', express.static('./public/scripts'))
//app.use('/gifts', giftsRouter)
app.use(cors())
app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
})

const PORT = 5173
    
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})



