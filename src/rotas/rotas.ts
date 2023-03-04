import {Router} from 'express'
import * as Controle from '../controle/controleAPI'


const router = Router()

router.get('/post', Controle.getNotas)
router.get('/post/:id', Controle.getNotasId)
router.post('/post', Controle.postNotas)
router.delete('/post/:id', Controle.deleteNotas)
router.put('/post/:id', Controle.editNotas)


export default router