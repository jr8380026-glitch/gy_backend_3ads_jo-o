import express from 'express'

const app = express ()
const porta = 3000 
// criar rotas  de servidor
app.get('/', (req, res)=> (
    res.send('Olá, abacaxi')
))

app.listen(porta, () => ('console.log(servidor está vivo)'))