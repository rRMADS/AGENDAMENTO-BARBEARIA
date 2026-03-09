const api="http://localhost:3000"

const form=document.getElementById("form")

form.addEventListener("submit",async(e)=>{

e.preventDefault()

const agendamento={

nome:document.getElementById("nome").value,
telefone:document.getElementById("telefone").value,
servico:document.getElementById("servico").value,
data:document.getElementById("data").value,
horario:document.getElementById("horario").value

}

const res=await fetch(api+"/agendar",{

method:"POST",
headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(agendamento)

})

if(res.ok){

alert("Horário agendado com sucesso!")

form.reset()

}else{

alert("Horário já ocupado")

}

})