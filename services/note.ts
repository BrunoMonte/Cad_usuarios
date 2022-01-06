import { INote } from "../types/INote"
import { connect } from '../libs/mongodb'
import { Note } from '../models/noteModel'
import { Error } from "mongoose"


//Regra de negócio, par facilitar na destribuição em camadas

const listagem_cadastro = async () => {
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

const criar_usuario = async (note: INote ) => {
    if (!note.nome) {
        throw new Error("Informe seu nome completo!")
    }
    if (!note.numero) {
        throw new Error("Informe o telefone para contato !")
    }
    if (!note.email) {
        throw new Error("Informe o campo de email!")
    }
    if (!note.senha) {
        throw new Error("Informe uma senha !")
    }
    if (!note.empresa) {
        throw new Error("Indique o campo de empresa !")
    }
    if (!note.dn) {
        throw new Error("Informe a sua data de nascimento!")
    }

    
    //await Note.criar_usuario(note)
    
    return true
  
}

const update = async (note: INote) => {
    
    if (!note.email) {
        throw new Error("Informe o campo email!")
    }
    if(!note.senha){
        throw new Error("Informe o campo de senha")
    }
    
  
    const noteFound = await Note.findByIdAndUpdate(note.senha, note) // metodos utilizado no mongoose
  
    if (!noteFound) {
      throw new Error("Nenhuma anotação encontrada para o Nome e Senha informado!")
    }
    
    return true
}

const remove = async (email:string, senha: number) => {
    if (!email && !senha) {
        throw new Error("Dados inválidos")
    }
  
    const note = await Note.findByIdAndRemove(senha)
    if (!note) {
        throw new Error("Nenhuma cadastro encontrad para os campos informados!")
    }
    
    return true
}

export {
    listagem_cadastro,
    get,
    criar_usuario,
    update,
    remove
}
