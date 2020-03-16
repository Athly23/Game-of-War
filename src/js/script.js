
class Card {
    constructor(suit, rank, score) {
        this.suit = suit
        this.rank = rank
        this.score = score
    }
}


class Deck {
   constructor (cards, suits, rank) {
       this.cards = []
       this.rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
       this.suits = ["hearts", "Spades", "Diamonds", "Clubs"]
       this.score = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
       
   } 
       createDeck(){
           for(let i = 0; i < this.rank.length; i++ ) {
               for(let j = 0; j < this.suits.length; j++) {
                   let card =new Card(this.suits[j], this.rank[i], this.score[i])
                   this.cards.push(card);
               } 
           }
           
           
       }

       shuffle() {
        for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        }
        return this.cards;
      }
    



       
    }

    
    


let suits = ["hearts", "Spades", "Diamonds", "Clubs"]
let rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
let deck = new Deck();
deck.createDeck(suits, rank, score)
console.log(deck.createDeck());

