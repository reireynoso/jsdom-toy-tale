const addToyForm = document.querySelector('.add-toy-form')
// addToyForm.addEventListener('submit', handleNewToy)

// function handleNewToy(e){
//     // debugger
//     e.preventDefault();
//     const name = e.target.name.value
//     const image_url = e.target.image.value
//     fetch('http://localhost:3000/toys', {
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         name: name,
//         image: image_url,
//         likes: 0
//       })
//     })
//     .then(resp => resp.json())
//     .then(toy => {
//       createCardElement(toy)
//     })
//     e.target.reset()
// }

// fetchToys()



// function fetchToys(){
//   fetch('http://localhost:3000/toys')
//   .then(res => res.json())
//   .then(toys => {
//     toysArray = toys
//     loadToysIntoDom()
//   })
// }

// // OR HERE!

// function loadToysIntoDom(){
//   toysArray.forEach(toy => {
//     createCardElement(toy)
//   })
// }

// function createCardElement(toy){
//   const toyDiv = document.createElement('div')
//   toyDiv.className = "card"
//     const h2 = document.createElement('h2')
//     h2.innerText = toy.name
//     const img = document.createElement('img')
//     img.className = "toy-avatar"
//     img.src = toy.image
//     const p = document.createElement('p')
//     p.innerText = toy.likes
//     const button = document.createElement('button')
//     button.className = "like-btn"
//     button.innerText = "Like <3"
//     button.setAttribute('data-id', `${toy.id}`)
//   toyDiv.append(h2,img,p,button)
//   // toyDiv.addEventListener('click', (e) => {
//   //     if(e.target.className === "like-btn"){
//   //       toy.likes = toy.likes + 1
//   //       increaseLike(e.target.previousSibling, toy)
//   //     }
//   // })
//   toyCollection.append(toyDiv)
// }

// function increaseLike(element, newLike, toyId){
//   // debugger
//   fetch(`http://localhost:3000/toys/${toyId}`, {
//     method: 'PATCH',
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       likes: newLike
//     })
//   })
//   .then(resp => resp.json())
//   .then(toy => {
//     element.innerText = toy.likes
//   })
// }