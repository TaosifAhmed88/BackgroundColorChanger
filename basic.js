const button = document.getElementById('button')
const color = document.querySelector('#color')

let hex = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
]

//Adding event listener
button.addEventListener('click',() => {
    //alert('Clicked')
    const hexColor = generatehexcolor()
    document.body.style.backgroundColor = hexColor
    color.textContent = hexColor
})

//function to generate hex color

const generatehexcolor = () => {
   let  hexColor = '#';

   for(let i = 0; i < 6; i++){
    hexColor = hexColor + hex[generaterandomcolor()]
   }
   return hexColor
}

//fn to generate random color

const generaterandomcolor = () => {
 return Math.floor(Math.random()*16)
}




