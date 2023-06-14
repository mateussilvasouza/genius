let order = []
let clickedOrder = []
let score = 0

// 0 - red
// 1 - green
// 2 - blue
// 3 - yellow

const red = document.querySelector('.red')
const green = document.querySelector('.green')
const blue = document.querySelector('.blue')
const yellow = document.querySelector('.yellow')
const start = document.querySelector('.play')
const placar = document.querySelector('.score')
placar.innerHTML = score;

let shuffleOrder = () => {
    order.push(Math.floor(Math.random()*4))
    clickedOrder = []

    for(let i in order){
            switch(order[i]){
                case 0:
                    lightColor(red,Number(i))
                    break;
                case 1:
                    lightColor(green,Number(i))
                    break;
                case 2:
                    lightColor(blue,Number(i))
                    break;
                case 3:
                    lightColor(yellow,Number(i))
                    break;
            }               
    }
    
    setTimeout(()=>{
        checkResponse(order, clickedOrder)
    }, (order.length * 800) + 1000)
}

start.addEventListener('click',()=>{
    order = []
    clickedOrder = []
    score = 0
    placar.innerHTML = score
    shuffleOrder()
})

red.addEventListener('click',()=>{
    clickedOrder.push(0)
    selectedColor(red)
})
green.addEventListener('click',()=>{
    clickedOrder.push(1)
    selectedColor(green)
})
blue.addEventListener('click',()=>{
    clickedOrder.push(2)
    selectedColor(blue)
})
yellow.addEventListener('click',()=>{
    clickedOrder.push(3)
    selectedColor(yellow)
})

let lightColor = (element, number) => {
    setTimeout(()=>{
        element.classList.add('selected');
    },number == 0 ? 180:number*250)
    setTimeout(()=>{
        element.classList.remove('selected')
    },number == 0 ? 280:number*350)
}

let selectedColor = (element) => {
    element.classList.add('selected');
    setTimeout(()=>{
        element.classList.remove('selected')
    },350)
}

let checkResponse = (order,clickedOrder) => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i] || clickedOrder.length != order.length){
            alert('You Lose!')
            order = []
            clickedOrder = []
            break;
        }
    }
    if(clickedOrder.length == order.length && clickedOrder.length != 0){
        score += 10;
        placar.innerHTML = score;
        alert(`Você venceu! Iniciando Próximo Nível`)
        clickedOrder = []
        shuffleOrder()
    }
}