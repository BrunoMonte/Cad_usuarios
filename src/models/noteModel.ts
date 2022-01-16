import mongoose  from 'mongoose'

//criação de campos para banco

const noteSchema = new mongoose.Schema({
    //tipando os campos - tipos dados do mongoose
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        select:false // quando solicitar no banco, nao vim no array de usuarios.
    },
    RegisteredDate:{    // anota a data que o registro foi criado
        type: Date,
        default: Date.now
    }
   
 
})

const Note = mongoose.model('notes', noteSchema) //Nome da tabela de referencia no banco

export { Note }