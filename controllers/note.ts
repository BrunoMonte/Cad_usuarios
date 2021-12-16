import { Request, Response } from 'express'
import * as note from '../services/note'
import { error } from '../libs/bindError'

const list = async (req: Request<any>, res: Response<any>) => {
    try {
        const notes = await note.list()
        return res.json(notes)
    } catch (err: any) {
        return error(res, err)
    }
}

const get = async (req: Request<any>, res: Response<any>) => {
    try {
        const nome = req.body.nome
        
        if(!nome) return res.status(400).json({ message: 'Informe o campo nome!' })    

        const noteFound = await note.get(nome)
        res.json(noteFound)
    } catch (err: any) {
        return error(res, err)
    }

}

const create = async (req: Request<any>, res: Response<any>) => {
    try {
        const nome = req.body.nome
        const senha = req.body.senha
        const numero = req.body.numero
        const email = req.body.email
        
        const noteCreated = await note.create({ nome,senha, numero, email })
        return res.json(noteCreated)
    } catch (err: any) {
        return error(res, err)
    }

  
}

const update = async (req: Request<any>, res: Response<any>) => {
    try {
        const nome = req.body.nome
        const senha = req.body.senha
        const numero = req.body.numero
        const email = req.body.email
        
        
        if (!nome && !senha) {
            return res.status(400).json({ message: 'Informe o campo Nome e Senha para alterar contato' })
        }

        const noteUpdated = await note.update({nome, senha, numero, email})
        return res.json(noteUpdated)
    } catch (err: any) {
        return error(res, err)
    }

}

const remove = async (req: Request<any>, res: Response<any>) => {
    try {
        const nome = req.body.nome
        const senha = req.body.senha
        
        if (!nome && !senha) {
            return res.status(400).json({ message: 'Informe o campo nome e senha corretos, para excluir cadastro' })
        }

        await note.remove(nome)
        res.json({ success: true })

    } catch (err: any) {
        return error(res, err)
    }
}

export {
    list,
    get, 
    create,
    update, 
    remove
}