import express from "express";
// variável para acessar od metódos express
const app = express();
// ativa o leito json
app.use(express.json())

// rota saida de dados 
app.get('/usuarios',(req,res)=>{
res.send("Informação Enviada")

})



app.post('/usuarios', (req, res)=>{
console.log(req.body + "oi");
res.status(201).json({mensagem:"Cliente cadastrado"})
})

app.listen(3000, ()=>{
console.log("Servidor Rodando!")
})
// http://localhost:3000