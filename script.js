const list = document.querySelector("#app ul")
const input = document.querySelector("#app input")
const button = document.querySelector("#app button")




const tarefas = JSON.parse(localStorage.getItem("list")) || []

function renderTarefas(){
    list.innerHTML = ""

  for (const iterator of tarefas) {
   const tarefaElement = document.createElement("li")
   const tarefaText = document.createTextNode(iterator)

   const linkElement = document.createElement("a")
   linkElement.setAttribute("href", "#")

   const pos = tarefas.indexOf(iterator)
   linkElement.setAttribute("onclick", `deleteTarefas(${pos})`)

   const linkText = document.createTextNode("Excluir")
   linkElement.appendChild(linkText)

   tarefaElement.appendChild(tarefaText)
   list.appendChild(tarefaElement)

   tarefaElement.appendChild(tarefaText)
   tarefaElement.appendChild(linkElement)
   list.appendChild(tarefaElement)
   
}
}

renderTarefas()

function addTarefas(){
    const tarefaText = input.value
    tarefas.push(tarefaText)
    input.value = ""
    renderTarefas()
    saveToStorage()
}

button.onclick = addTarefas

function deleteTarefas(pos){
   tarefas.splice(pos, 1)
   renderTarefas()
   saveToStorage()
}

function saveToStorage(){
    localStorage.setItem("list", JSON.stringify(tarefas))
}