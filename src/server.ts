import express, {Request, Response} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import rotaAPI from './rotas/rotas'



dotenv.config()

const server = express()
server.use((req: Request, res: Response, next) => {
    res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    server.use(cors());
    next();
});
server.use(express.json())
server.use(rotaAPI)





server.use((req: Request, res: Response)=>{
   res.status(400)
   res.json({
    Erro: 'Rota nao encontrada Erro 404'
   })
})


server.listen(process.env.PORT)


