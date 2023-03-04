import {Request, Response} from 'express'
import {Notas} from '../bancoDados/models'


export const getNotas = async (req: Request, res: Response)=>{
    try{let postGet = await Notas.findAll()
        res.json(postGet)
    }catch(erro){
        return console.error("Erro 404 : ", erro);
    }

}


export const postNotas =async(req: Request, res: Response)=>{
    let titulo =  req.body.titulo
    let categoria = req.body.categoria
    let entrada = req.body.entrada
    let saida = req.body.saida
    let total = req.body.total
    let minimo = req.body.minimo
    
   try {let newNotas = await Notas.create({
        titulo, categoria, entrada, saida, total, minimo
    })
    res.json({id: newNotas.id, titulo, categoria, entrada, saida, total, minimo})}
    catch(erro){
        return console.error("Erro 404 : ", erro);
    }
}

export const deleteNotas = async (req: Request, res: Response)=>{
       let {id} = req.params
       await Notas.destroy({where:{id}})
       res.send({OK: 'apagado com sucesso'})
}

export const editNotas = async (req: Request, res: Response)=>{
    let {id} = req.params
    let { titulo, categoria, entrada, saida, total, minimo } = req.body
    let notasEdit = await Notas.findByPk(id)
    if(notasEdit){
        notasEdit.titulo = titulo
        notasEdit.categoria = categoria
        notasEdit.entrada = entrada
        notasEdit.saida = saida
        notasEdit.total = total
        notasEdit.minimo = minimo
      await notasEdit.save()
      res.send(notasEdit) 
    }else{
      res.send("Error")
  }
}

export const getNotasId = async (req:Request, res:Response)=>{
    let  {id}  = req.params;
    let forId = await Notas.findByPk(id)
    res.send(forId)
    }