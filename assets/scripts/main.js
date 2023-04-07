let cards = [
    [
        `<div class="card" data-test="card">
            <div class="back-face face">
              <img src="./assets/images/bobrossparrot.gif" alt="" data-test="face-up-image">
            </div>
            <div class="front-face face">
              <img src="./assets/images/back.png" alt="" data-test="face-down-image">
            </div>
        </div>`,
        `<div class="card" data-test="card">
            <div class="back-face face">
              <img src="./assets/images/bobrossparrot.gif" alt="" data-test="face-up-image">
            </div>
            <div class="front-face face">
              <img src="./assets/images/back.png" alt="" data-test="face-down-image">
            </div>
        </div>`
    ],
    [
        `<div class="card" data-test="card">
            <div class="back-face face">
              <img src="./assets/images/explodyparrot.gif" alt="" data-test="face-up-image">
            </div>
            <div class="front-face face">
              <img src="./assets/images/back.png" alt="" data-test="face-down-image">
            </div>
        </div>`,
        `<div class="card" data-test="card">
            <div class="back-face face">
              <img src="./assets/images/explodyparrot.gif" alt="" data-test="face-up-image">
            </div>
            <div class="front-face face">
              <img src="./assets/images/back.png" alt="" data-test="face-down-image">
            </div>
        </div>`
    ],
    [
        `<div class="card" data-test="card">
            <div class="back-face face">
              <img src="./assets/images/fiestaparrot.gif" alt="" data-test="face-up-image">
            </div>
            <div class="front-face face">
              <img src="./assets/images/back.png" alt="" data-test="face-down-image">
            </div>
        </div>`,
        `<div class="card" data-test="card">
            <div class="back-face face">
              <img src="./assets/images/fiestaparrot.gif" alt="" data-test="face-up-image">
            </div>
            <div class="front-face face">
              <img src="./assets/images/back.png" alt="" data-test="face-down-image">
            </div>
        </div>`
    ],
    [
        `<div class="card" data-test="card">
            <div class="back-face face">
              <img src="./assets/images/metalparrot.gif" alt="" data-test="face-up-image">
            </div>
            <div class="front-face face">
              <img src="./assets/images/back.png" alt="" data-test="face-down-image">
            </div>
        </div>`,
        `<div class="card" data-test="card">
            <div class="back-face face">
              <img src="./assets/images/metalparrot.gif" alt="" data-test="face-up-image">
            </div>
            <div class="front-face face">
              <img src="./assets/images/back.png" alt="" data-test="face-down-image">
            </div>
        </div>`
    ],
    [
        `<div class="card" data-test="card">
            <div class="back-face face">
              <img src="./assets/images/revertitparrot.gif" alt="" data-test="face-up-image">
            </div>
            <div class="front-face face">
              <img src="./assets/images/back.png" alt="" data-test="face-down-image">
            </div>
        </div>`,
        `<div class="card" data-test="card">
            <div class="back-face face">
              <img src="./assets/images/revertitparrot.gif" alt="" data-test="face-up-image">
            </div>
            <div class="front-face face">
              <img src="./assets/images/back.png" alt="" data-test="face-down-image">
            </div>
        </div>`
    ],
    [
        `<div class="card" data-test="card">
            <div class="back-face face">
              <img src="./assets/images/tripletsparrot.gif" alt="" data-test="face-up-image">
            </div>
            <div class="front-face face">
              <img src="./assets/images/back.png" alt="" data-test="face-down-image">
            </div>
        </div>`,
        `<div class="card" data-test="card">
            <div class="back-face face">
              <img src="./assets/images/tripletsparrot.gif" alt="" data-test="face-up-image">
            </div>
            <div class="front-face face">
              <img src="./assets/images/back.png" alt="" data-test="face-down-image">
            </div>
        </div>`
    ]
]

const container = document.querySelector('.game-content')
let cardsSelected = []
// game(Number(prompt('Com quantas cartas deseja jogar?')))

function game(qtdDeCartas) {
    for (let i = 0; i < qtdDeCartas / 2; i++) {
        for (let j = 0; j < 2; j++) {
            container.innerHTML += cards[i][j]
        }
    }

    const cardsContainer = document.querySelectorAll('.card')
    cardsContainer.forEach(card => {
        card.addEventListener('click', () => {
            if (cardsSelected.length < 2) {
                virarCartas(card)
            }
        })
    })
}

function virarCartas(divCurrent) {
    divCurrent.querySelector('.front-face').style.transform = 'rotateY(-180deg)'
    divCurrent.querySelector('.back-face').style.transform = 'rotateY(0deg)'
    cardsSelected.push(divCurrent)
    if (cardsSelected.length === 2) verificarIgualdade(cardsSelected)
}

function desvirarCartas() {
    for (const card of cardsSelected) {
        card.querySelector('.front-face').style.transform = 'rotateY(0deg)'
        card.querySelector('.back-face').style.transform = 'rotateY(-180deg)'
    }

    cardsSelected = []
}

function verificarFimDoJogo() {
    const container = Array(document.querySelector('.game-content').children)
    container.forEach(divList => {
        if (verificarCartasViradas(divList))
            setTimeout(() => {
                alert('Você ganhou o jogo!')
            }, 600)
    })
}

function verificarCartasViradas(divList) {
    for (let i = divList.length - 1; i >= 0; i--) {
        if (!(divList[0].classList.value === divList[i].classList.value)) {
            return false
        }
        return true
    }
}

function verificarIgualdade(cardList) {
    if (
        cardList[0].querySelector('.back-face img').src !==
        cardList[1].querySelector('.back-face img').src
    ) {
        setTimeout(desvirarCartas, 1000)
    } else {
        for (const card of cardList) {
            card.classList.add('check')
            card.classList.add('check')
            verificarFimDoJogo()
        }
        cardsSelected = []
    }
}

game(Number(prompt('Com quantas cartas desejar jogar?')))
