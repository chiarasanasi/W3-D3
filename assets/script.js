const dataFooter = document.querySelector("footer p")
const year = new Date().getFullYear()
dataFooter.innerText = `${year} ${dataFooter.innerText} `

const myForm = document.querySelector("form")
myForm.addEventListener("submit", (e) => {
  e.preventDefault()

  let thingToDo = document.getElementById("thingToDo")
  let thingToDoValue = thingToDo.value
  console.log(thingToDoValue)

  const list = document.createElement("li")
  console.log(list)
  list.innerText = `${thingToDoValue}`
  const listUl = document.getElementById("to-do-list")
  list.classList.add("list-items")
  listUl.appendChild(list)

  const buttonDelete = document.createElement("button")
  buttonDelete.innerText = "Elimina"
  const listSection = document.querySelector("section")
  listSection.appendChild(buttonDelete)
  buttonDelete.addEventListener("click", (e) => {
    list.remove(list, buttonDelete)
  })

  console.log("ora eliminiamo " + thingToDoValue + " dall'input")
  thingToDo.value = ""

  const coseDellaLista = document.querySelectorAll(".list-items")
  list.addEventListener("click", (e) => {
    for (let i = 0; i < coseDellaLista.length; i++) {
      coseDellaLista[i].classList.remove("list-items")
      coseDellaLista[i].classList.add("list-items-underline")
    }
  })
})
