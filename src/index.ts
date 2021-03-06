import express from 'express'
import cors from 'cors'
import * as note from './controllers/note'
import * as dotenv from 'dotenv'

dotenv.config()  //para variáveis de ambiente 

const app = express()
app.use(express.json())
app.use(cors())
const port = 3000


app.get('/notes',  note.listagem_cadastro)
app.post('/notes/cadastrar', note.criar_usuario)
app.put('/notes', note.alteracao_cadastro)
app.delete('/notes', note.remove)



app.listen(port, () => {
  console.log(`⚡️ API rodando em http://localhost:${port}`)
})
