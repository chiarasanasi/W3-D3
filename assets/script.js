const dataFooter = document.querySelector("footer p")
const year = new Date().getFullYear()
dataFooter.innerText = `${year} ${dataFooter.innerText} `

const myForm = document.querySelector("form")
myForm.addEventListener("submit", (e) => {
  e.preventDefault()

  let thingToDo = document.getElementById("thingToDo")
  let thingToDoValue = thingToDo.value

  const list = document.createElement("li")
  list.innerHTML = `
    <p>${thingToDoValue}</p>
    <button>ELIMINA</button>
  `
  const listUl = document.getElementById("to-do-list")
  list.classList.add("list-items")
  listUl.appendChild(list)

  thingToDo.value = ""

  const coseDellaLista = document.querySelectorAll(".list-items")
  list.addEventListener("click", (e) => {
    for (let i = 0; i < coseDellaLista.length; i++) {
      coseDellaLista[i].classList.remove("list-items")
      coseDellaLista[i].classList.add("list-items-underline")
    }
  })

  const buttonDelete = document.querySelector("ul li button")
  buttonDelete.addEventListener("click", (e) => {
    list.remove()
    buttonDelete.remove()
  })
})
