

    var cards = [
        {
            rank: "queen",
            suit: "hearts",
            cardImage: "images/queen-of-hearts.png",
        },
        {
            rank: "queen",
            suit: "diamonds",
            cardImage: "images/queen-of-diamons.png",
        },
        {
            rank: "king",
            suit: "hearts",
            cardImage: "image/king-of-hearts.png",
        },
        {
            rank: "king",
            suit: "diamonds",
            cardImage: "images/king-of-diamonds.png",
        }
    ];



        var cardsInPlay = [];
        

    

    var flipCard = function () {
        var cardId = this.getAttribute('data-id');
        
        cardsInPlay.push(cards.rank);
        this.document.getElementById("src");


        console.log("User flipped " + cards[cardId].rank);
        console.log("User flipped " + cards[cardId].cardImage);
        console.log("User flipped " + cards[cardId].suit);
        checkForMatch()
    }





        var checkForMatch = function () {
        
        this.setAttribute(cards[cardId].cardImage)

        if (cardsInPlay.length === 2)
            if (cardsInPlay[0] === cardsInPlay[1]) {
                alert("You found your match!");
            } else {
                alert("Sorry try again.");
            }
        }


    

        var createBoard = function () {
            for (var i = 0; i < cards.length; i++) {
                console.log(i);

                
            var cardElement = document.createElement('img');
            
            cardElement.setAttribute('src',"images/back.png");
            cardElement.setAttribute("game-board", i);
            cardElement.setAttribute('data-id', i);
            cardElement.addEventListener('click', flipCard);
            document.getElementById('game-board').appendChild(cardElement);

            }

        }
    



createBoard();































