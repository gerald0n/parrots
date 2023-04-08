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
    ],
    [
        `<div class="card" data-test="card">
          <div class="back-face face">
            <img src="./assets/images/unicornparrot.gif" alt="" data-test="face-up-image">
          </div>
          <div class="front-face face">
            <img src="./assets/images/back.png" alt="" data-test="face-down-image">
          </div>
      </div>`,
        `<div class="card" data-test="card">
          <div class="back-face face">
            <img src="./assets/images/unicornparrot.gif" alt="" data-test="face-up-image">
          </div>
          <div class="front-face face">
            <img src="./assets/images/back.png" alt="" data-test="face-down-image">
          </div>
      </div>`
    ]
]
let qtdCards = prompt('Com quantas cartas desejar jogar?')
const container = document.querySelector('.game-content') //container reservado para inserção de das cartas
const timer = document.querySelector('.timer')

let cardsSelected = []
let contadorDeClicks = 0
let interval

function game(qtdDeCartas) {
    container.innerHTML = ''
    timer.innerText = 0
    interval = setInterval(() => {
        timer.innerText++
    }, 1000)

    cards.sort(comparador)
    cards.sort(comparador)
    cards.sort(comparador)

    const cartasEmbaralhadas = []
    for (let i = 0; i < qtdDeCartas / 2; i++) {
        for (let j = 0; j < 2; j++) {
            cartasEmbaralhadas.push(cards[i][j])
        }
    }

    cartasEmbaralhadas.sort(comparador)
    cartasEmbaralhadas.sort(comparador)
    cartasEmbaralhadas.sort(comparador)

    for (let i = 0; i < qtdDeCartas; i++) {
        container.innerHTML += cartasEmbaralhadas[i]
    }

    const cardsContainer = document.querySelectorAll('.card')
    cardsContainer.forEach(card => {
        card.addEventListener('click', () => {
            contadorDeClicks++
            if (cardsSelected.length < 2) {
                virarCartas(card)
            }
        })
    })
}

function comparador() {
    return Math.random() - 0.5
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
                alert(
                    `Você ganhou em ${contadorDeClicks} jogadas! A duração do jogo foi de ${timer.textContent} segundos!`
                )
                if (
                    prompt(
                        'Você gostaria de reiniciar a partida? (sim ou não)'
                    ).toLowerCase() === 'sim'
                ) {
                    qtdCards = prompt('Com quantas cartas desejar jogar?')
                    if (qtdCards != null) {
                        while (
                            qtdCards < 4 ||
                            qtdCards > 14 ||
                            qtdCards % 2 === 1
                        ) {
                            qtdCards = prompt(
                                'Com quantas cartas desejar jogar?'
                            )
                        }
                        clearInterval(interval)
                        game(Number(qtdCards))
                    }
                } else {
                    clearInterval(interval)
                    return
                }
            }, 600)
    })
}

function verificarCartasViradas(divList) {
    let count = 0
    Array(divList).forEach(div => {
        for (item of div) {
            if (item.classList.contains('check')) count++
        }
    })

    return count == qtdCards
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
        }
        verificarFimDoJogo()
        cardsSelected = []
    }
}

if (qtdCards != null) {
    while (qtdCards < 4 || qtdCards > 14 || qtdCards % 2 === 1) {
        qtdCards = prompt('Com quantas cartas desejar jogar?')
    }
    game(Number(qtdCards))
}
