const cards = [
    [
        `<div class="card">
            <div class="back-face face">
              <img src="./assets/images/bobrossparrot.gif" alt="">
            </div>
            <div class="front-face face">
              <img src="./assets/images/back.png" alt="">
            </div>
        </div>`,
        `<div class="card">
            <div class="back-face face">
              <img src="./assets/images/bobrossparrot.gif" alt="">
            </div>
            <div class="front-face face">
              <img src="./assets/images/back.png" alt="">
            </div>
        </div>`
    ],
    [
        `<div class="card">
            <div class="back-face face">
              <img src="./assets/images/explodyparrot.gif" alt="">
            </div>
            <div class="front-face face">
              <img src="./assets/images/back.png" alt="">
            </div>
        </div>`,
        `<div class="card">
            <div class="back-face face">
              <img src="./assets/images/explodyparrot.gif" alt="">
            </div>
            <div class="front-face face">
              <img src="./assets/images/back.png" alt="">
            </div>
        </div>`
    ],
    [
        `<div class="card">
            <div class="back-face face">
              <img src="./assets/images/fiestaparrot.gif" alt="">
            </div>
            <div class="front-face face">
              <img src="./assets/images/back.png" alt="">
            </div>
        </div>`,
        `<div class="card">
            <div class="back-face face">
              <img src="./assets/images/fiestaparrot.gif" alt="">
            </div>
            <div class="front-face face">
              <img src="./assets/images/back.png" alt="">
            </div>
        </div>`
    ],
    [
        `<div class="card">
            <div class="back-face face">
              <img src="./assets/images/metalparrot.gif" alt="">
            </div>
            <div class="front-face face">
              <img src="./assets/images/back.png" alt="">
            </div>
        </div>`,
        `<div class="card">
            <div class="back-face face">
              <img src="./assets/images/metalparrot.gif" alt="">
            </div>
            <div class="front-face face">
              <img src="./assets/images/back.png" alt="">
            </div>
        </div>`
    ],
    [
        `<div class="card">
            <div class="back-face face">
              <img src="./assets/images/revertitparrot.gif" alt="">
            </div>
            <div class="front-face face">
              <img src="./assets/images/back.png" alt="">
            </div>
        </div>`,
        `<div class="card">
            <div class="back-face face">
              <img src="./assets/images/revertitparrot.gif" alt="">
            </div>
            <div class="front-face face">
              <img src="./assets/images/back.png" alt="">
            </div>
        </div>`
    ],
    [
        `<div class="card">
            <div class="back-face face">
              <img src="./assets/images/tripletsparrot.gif" alt="">
            </div>
            <div class="front-face face">
              <img src="./assets/images/back.png" alt="">
            </div>
        </div>`,
        `<div class="card">
            <div class="back-face face">
              <img src="./assets/images/tripletsparrot.gif" alt="">
            </div>
            <div class="front-face face">
              <img src="./assets/images/back.png" alt="">
            </div>
        </div>`
    ]
]
const firstLine = document.querySelector('.line')

for(let i = 0; i < cards.length; i++) {
  for(let j = 0; j < 2; j++) {
    firstLine.innerHTML += cards[i][j]
  }
}

