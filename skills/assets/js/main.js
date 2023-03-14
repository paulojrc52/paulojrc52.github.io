const FRONT = 'card_front'
const BACK = 'card_back'
const CARD = 'card'
const ICON = 'icon'
const FLIP = 'flip'

startGame()

function startGame () {
  initializeCards(game.creatCardsFromTechs())
}

function initializeCards(cards) {
  let gameBoard = document.querySelector('#gameBoard')
  gameBoard.innerHTML = ''
  game.cards.forEach(card => {
    let cardElement = document.createElement('div')

    cardElement.id = card.id
    cardElement.classList.add(CARD)
    cardElement.dataset.icon = card.icon

    createCardContent(card, cardElement)

    cardElement.addEventListener('click', flipCard)
    gameBoard.appendChild(cardElement)
  })
}

function createCardContent(card, cardElement) {
  createCardFace(FRONT, card, cardElement)
  createCardFace(BACK, card, cardElement)
}

function createCardFace(face, card, element) {

  let cardElementFace = document.createElement('div')
  cardElementFace.classList.add(face)

  if(face === FRONT) {
    let iconElement = document.createElement("img")
    let path = '/skills/assets/images/'

    iconElement.classList.add(ICON)
    iconElement.src = `${path}${card.icon}.png`
    cardElementFace.appendChild(iconElement)

  } else {
    cardElementFace.innerHTML = '&lt/&gt'
  }

  element.appendChild(cardElementFace)
}
 
function flipCard() {

  if(game.setCard(this.id)){
    this.classList.add(FLIP)

    if(game.firstCard && game.secondCard) {
      if(game.checkMatch()) {
        game.clearCards()
        if(game.checkGameOver()) {
          let gameOverLayer = document.querySelector('#gameOver')
          gameOverLayer.style.display = 'flex'
          scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
        }
      } else {
        setTimeout(() => {
          let firstCardView = document.querySelector(`#${game.firstCard.id}`)
          let secondCardView = document.querySelector(`#${game.secondCard.id}`)
       
          firstCardView.classList.remove(FLIP)
          secondCardView.classList.remove(FLIP)
          game.unflipedCards()
        }, 1000)
      }
    }
  }
}

const restart = function() {
  game.clearCards()
  startGame()
  let gameOverLayer = document.querySelector('#gameOver')
  gameOverLayer.style.display = 'none'

}

