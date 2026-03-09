const api="http://localhost:3000"

const lista=document.getElementById("lista")

async function carregar(){

const res=await fetch(api+"/agendamentos")

const dados=await res.json()

lista.innerHTML=""

dados.forEach(a=>{

const li=document.createElement("li")

li.innerHTML=`

${a.data} ${a.horario} - ${a.nome} (${a.servico})

<button onclick="cancelar(${a.id})">
Cancelar
</button>

`

lista.appendChild(li)

})

}

async function cancelar(id){

await fetch(api+"/agendamentos/"+id,{
method:"DELETE"
})

carregar()

}

carregar()