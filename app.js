document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'corn',
            img: 'img/corn.jpg'
        },
        {
            name: 'corn',
            img: 'img/corn.jpg'
        },
        {
            name: 'hamburger',
            img: 'img/hamburger.jpg'
        },
        {
            name: 'hamburger',
            img: 'img/hamburger.jpg'
        },
        {
            name: 'hotdog',
            img: 'img/hotdog.jpg'
        },
        {
            name: 'hotdog',
            img: 'img/hotdog.jpg'
        },
        {
            name: 'ice-cream',
            img: 'img/ice-cream.jpg'
        },
        {
            name: 'ice-cream',
            img: 'img/ice-cream.jpg'
        },
        {
            name: 'milkshake',
            img: 'img/milkshake.jpg'
        },
        {
            name: 'milkshake',
            img: 'img/milkshake.jpg'
        },
        {
            name: 'pizza',
            img: 'img/pizza.jpg'
        },
        {
            name: 'pizza',
            img: 'img/pizza.jpg'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelectorAll('#result)
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //create board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'img/card.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    //check for match
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'img/blank.jpg')
            cards[optionTwoId].setAttribute('src', 'img/blank.jpg')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'img/card.jpg')
            cards[optionTwoId].setAttribute('src', 'img/card.jpg')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations, you found them all!'
        }
    }


    //flip card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})
