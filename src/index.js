const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false
let toysArray = []

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
  } else {
    toyForm.style.display = 'none'
  }
})

const toyCollection = document.querySelector('#toy-collection')
toyCollection.addEventListener('click', function(e){
  if(e.target.className === "like-btn"){
    // debugger
    let toyId = parseInt(e.target.dataset.id)
    let newLike = parseInt(e.target.previousElementSibling.innerText) + 1
    let element = e.target.previousElementSibling
    increaseLikes(toyId, element, newLike)
  }
})

function increaseLikes(toy, element, newLike){
  // debugger
  fetch(`http://localhost:3000/toys/${toy}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      likes: newLike
    })
  })
  .then(resp => resp.json())
  .then(toy => {
    element.innerText = toy.likes
  })

}


const addToyForm = document.querySelector(".add-toy-form")
addToyForm.addEventListener('submit', addToyToStuff)

function addToyToStuff(e){
  e.preventDefault()
  let name = e.target.name.value;
  let image = e.target.image.value;
  fetch('http://localhost:3000/toys', {
    method: "POST",
    headers:{
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      image: image,
      likes: 0
    })
  })
  .then(resp => resp.json())
  .then(toy => {
    createElement(toy)
  })
}
// 1. fetch request
// 2. create elements for the data we get from the response.

pageLoad()

function pageLoad(){
  fetch('http://localhost:3000/toys')
  .then(resp => resp.json())
  .then(toys => {
    // toysArray = toys
    toys.forEach(toy => {
      createElement(toy)
    })
  })
}

// innerHTML way

function createElement(toy){
  toyCollection.innerHTML += `<div class="card">
    <h2>${toy.name}</h2>
    <img src=${toy.image} class="toy-avatar" />
    <p>${toy.likes}</p>
    <button data-id=${toy.id} class="like-btn">Like <3</button>
  </div>`

}



// function createElement(toy){
//     const div = document.createElement('div')
//       div.className = "card"
//         const h2 = document.createElement('h2')
//         h2.innerText = toy.name
//         const img = document.createElement('img')
//         img.src = toy.image
//         img.className = "toy-avatar"  
//         const p = document.createElement('p')
//         p.innerText = toy.likes
//         const button = document.createElement('button')
//         button.className = "like-btn"
//         button.innerText = "Like <3"
//         button.addEventListener('click', function(e){
          // debugger
          // toy.likes = toy.likes + 1
        //   increaseLikes(toy, p)
        // })
        // button.setAttribute('data-id', toy.id)
      // div.append(h2,img,p,button)
      // toyCollection.append(div)
}

// YOUR CODE HERE

// function increaseLikes(toy, element){
//   toy.likes = toy.likes + 1
//   // console.log(toy.likes)
//   fetch(`http://localhost:3000/toys/${toy.id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify({
//       likes: toy.likes
//     })
//   })
//   .then(resp => resp.json())
//   .then(toy => {
//     element.innerText = toy.likes
//   })

// }
