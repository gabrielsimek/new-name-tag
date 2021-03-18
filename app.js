const input = document.getElementById('input')
const button = document.getElementById('button')
const output = document.getElementById('output')
const red = document.getElementById('red')
const yellow = document.getElementById('yellow')
const green = document.getElementById('green')
const color = document.getElementById('color')
let countoutput = document.getElementById('count-output')
console.log(countoutput)


button.addEventListener('click', () => {
    output.textContent = input.value
})

red.addEventListener('click', () => {
    color.style.backgroundColor = 'red'

})

green.addEventListener('click', () => {
    color.style.backgroundColor = 'green'
})

yellow.addEventListener('click', () => {
    color.style.backgroundColor = 'yellow'
})
let count = 0;
button.addEventListener('click', () => {
    count++
    console.log(count)
    countoutput.textContent = count
     

}
)