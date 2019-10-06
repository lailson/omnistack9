const express = require('express')
const app = express()
const routes = express.Router()

//Verbos principais do http: get, post, put, delete

//Query params colocados na própria URL.
//http://localhost:3333/users?idade=30
//Podemos acessar esses valores através da função abaixo:
// routes.get('/users', (req, res) => {
//     return res.json({ idade: req.query.idade })
// })

//Route params é aquele parametro que vai na url, como no caso quando você quer editar/deletar um usuário
//http://localhost:333/users/2
//Nesse caso o parametro 2 é passado na propria url. veja abaixo como pegar esse marametro:
// app.put('/users/:id', (req, res) => {
//     return res.json({ id: req.params.id })
//})

//Parametro no corpo da requisição (formato json)
//req.body
app.post('/users', (req, res) => {
    return res.json( req.body )
})

app.listen(3333)
