// Targets
let bdy = document.querySelector('body')

// createElements
const btn = document.createElement('button')
const div = document.createElement('div')
let container = document.getElementById('container')

// appendChild btn
bdy.appendChild(btn)
btn.innerText = 'Hover and see'
btn.setAttribute('id', 'hoverEffect')
bdy.appendChild(div)
container.appendChild(btn)
container.appendChild(div)
// trial

// Create Div
const Idbtn = document.getElementById('hoverEffect')
Idbtn.addEventListener('mouseenter', () => {
    div.style.height = '300px'
    div.style.width = '300px'
    div.style.display = 'flex'
    div.style.alignItems = 'center'
    div.style.justifyContent = 'center'
    div.style.fontSize = '90px'
    div.style.border = 'none'
    div.style.borderRadius = '30px'
    div.style.visibility = 'visible'
    div.style.transition = '1s ease-in-out'
    div.innerHTML = '<iframe width="560" height="315" src="./index.html" allowfullscreen></iframe>'
})


div.addEventListener('mouseenter', () => {
    div.style.visibility = 'visible'
})

div.addEventListener('mouseleave', () => {
    div.style.visibility = 'hidden'
})

// Remove Div
Idbtn.addEventListener('mouseleave', () => {
    // bdy.removeChild(div)
    div.style.visibility = 'hidden'
})