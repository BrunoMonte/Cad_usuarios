import { Request, Response } from 'express'
import * as note from '../services/note'
import { error } from '../libs/bindError'
import { Note } from '../models/noteModel'


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
        const user = await Note.create(req.body)
        
        return res.send({ user })
    } catch (err: any) {
        return res.status(401).send({ error: "Falha ao registrar" })
    }
 
}

const alteracao_cadastro = async (req: Request<any>, res: Response<any>) => {
    try {
        const email = req.body.email
        const password = req.body.password

        if(!email && !password){
            return res.status(401).json({ message: "Informe os dados corretos !"})
        }

        const noteUpdate = await note.alteracao_cadastro

        return res.json(note.alteracao_cadastro)

    } catch (err: any) {
        return err(res,error)
    }
}

const remove = async (req: Request<any>, res: Response<any>) => {
    try {
        const email = req.body.email
        const password = req.body.password
        
        if (!email && !password) {
            return res.status(404).json({ message: 'Informe os campos correto, para excluir o contato' })
        }

        await note.remove(email, password)
        res.json({ success: true })

    } catch (err: any) {
        return error(res, err)
    }
}

export {
    listagem_cadastro,
    get, 
    criar_usuario,
    alteracao_cadastro,
    remove
}