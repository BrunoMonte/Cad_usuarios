import mongoose  from 'mongoose'

//criação de campos para banco

const noteSchema = new mongoose.Schema({
    //tipando os campos - tipos dados do mongoose
  
    nome: String,
    senha: Number,
    numero: Number,
    email: String
    

})

const Note = mongoose.model('notes', noteSchema) //Nome da tabela de referencia no banco

export { Note }