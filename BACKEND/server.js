const express = require("express")
const cors = require("cors")
const db = require("./database")

const app = express()

app.use(cors())
app.use(express.json())

app.post("/agendar",(req,res)=>{

const {nome,telefone,servico,data,horario} = req.body

db.get(
"SELECT * FROM agendamentos WHERE data=? AND horario=?",
[data,horario],
(err,row)=>{

if(row){
return res.status(400).json({erro:"Horario ocupado"})
}

db.run(
"INSERT INTO agendamentos (nome,telefone,servico,data,horario) VALUES (?,?,?,?,?)",
[nome,telefone,servico,data,horario],
function(){

res.json({id:this.lastID})

})

})

})

app.get("/agendamentos",(req,res)=>{

db.all("SELECT * FROM agendamentos",(err,rows)=>{

res.json(rows)

})

})

app.delete("/agendamentos/:id",(req,res)=>{

db.run(
"DELETE FROM agendamentos WHERE id=?",
[req.params.id],
()=>{

res.json({ok:true})

})

})

app.listen(3000,()=>{
console.log("Servidor rodando na porta 3000")
})