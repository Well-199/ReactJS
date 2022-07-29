import express, { Request, Response} from 'express'

const server = express()

server.get('/:name', (req: Request, res: Response) => {

    let query = req.params.name
    
    res.send('<h1>'+query+'!</h1>')
})

server.listen(3000)

