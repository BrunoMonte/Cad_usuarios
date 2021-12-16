import { INote } from "../types/INote"
import { connect } from '../libs/mongodb'
import { Note } from '../models/noteModel'


//Regra de negócio, par facilitar na destribuição em camadas

const list = async () => {
    await connect()
    const result = await Note.find()   //fazendo listagem de tudo dentro da tabela
    return result
}

const get = async (nome: string | number) => {
    if (!nome) {
      throw new Error("Informe o campo nome!")
    }
    
    const note = await Note.findById(nome)
    if (!note) {
        throw new Error("Nenhuma anotação encontrada para o nome informado!")
    }
    
    return note
}

const create = async (note: INote ) => {
    if (!note.nome) {
        throw new Error("Informe o campo nome!")
    }
    if (!note.senha) {
        throw new Error("Informe o campo senha!")
    }
  
    if (!note.numero) {
        throw new Error("Informe o campo de número!")
    }
    if (!note.email) {
        throw new Error("Informe o campo de email!")
    }

    
    await Note.create(note)
    
    return true
  
}

const update = async (note: INote) => {
    
    if (!note.nome) {
        throw new Error("Informe o campo nome!")
    }
    if (!note.senha) {
        throw new Error("Informe o campo senha!")
    }
  
    if (!note.numero) {
        throw new Error("Informe o campo numero!")
    }
    if (!note.email) {
        throw new Error("Informe o campo email!")
    }
    
  
    const noteFound = await Note.findByIdAndUpdate(note.senha, note) // metodos utilizado no mongoose
  
    if (!noteFound) {
      throw new Error("Nenhuma anotação encontrada para o Nome e Senha informado!")
    }
    
    return true
}

const remove = async (senha: number) => {
    if (!senha) {
        throw new Error("Nome ou senha inválidos")
    }
  
    const note = await Note.findByIdAndRemove(senha)
    if (!note) {
        throw new Error("Nenhuma cadastro encontrad para os campos informados!")
    }
    
    return true
}

export {
    list,
    get,
    create,
    update,
    remove
}
