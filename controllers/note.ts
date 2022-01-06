import { Request, Response } from 'express'
import * as note from '../services/note'
import { error } from '../libs/bindError'


const listagem_cadastro = async (req: Request<any>, res: Response<any>) => {
    try {
        const notes = await note.listagem_cadastro()
        return res.json(notes)
    } catch (err: any) {
        return error(res, err)
    }
}

const get = async (req: Request<any>, res: Response<any>) => {
    try {
        const nome = req.params.nome
        
        if(!nome) return res.status(400).json({ message: 'Informe o campo nome!' })    

        const noteFound = await note.get(nome)
        res.json(noteFound)
    } catch (err: any) {
        return error(res, err)
    }

}

const criar_usuario = async (req: Request<any>, res: Response<any>) => {
    try {
        const nome = req.body.nome
        const numero = req.body.numero
        const email = req.body.email
        const senha = req.body.senha
        const empresa = req.body.empresa
        const dn = req.body.dn  //data nascimento
        
        const noteCreated = await note.criar_usuario({ nome, numero, email, senha, empresa, dn })
        return res.json(noteCreated)
    } catch (err: any) {
        return error(res, err)
    }

  
}

const update = async (req: Request<any>, res: Response<any>) => {
    try {
        const email = req.body.email
        const senha = req.body.senha
        
        
        if (!email && !senha) {
            return res.status(401).json({ message: 'Informe o campo Email e Senha para alterar registro;' })
        }

        const noteUpdated = await note.update({
    senha: 0,
    nome: '',
    numero: 0,
    email: '',
    empresa: '',
    dn: 0               //estuda motivo da alteração das propriedades !
})
        return res.json(noteUpdated)
    } catch (err: any) {
        return error(res, err)
    }

}

const remove = async (req: Request<any>, res: Response<any>) => {
    try {
        const email = req.body.email
        const senha = req.body.senha
        
        if (!email && !senha) {
            return res.status(404).json({ message: 'Informe os campos correto, para excluir o contato' })
        }

        await note.remove(email, senha)
        res.json({ success: true })

    } catch (err: any) {
        return error(res, err)
    }
}

export {
    listagem_cadastro,
    get, 
    criar_usuario,
    update, 
    remove
}