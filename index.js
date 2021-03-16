// Write your code here!
document.getElementById('main').remove()
let newHeader = document.createElement('h1')
newHeader.id = "victory"
newHeader.innerHTML = "I is the champion!"
document.body.appendChild(newHeader)