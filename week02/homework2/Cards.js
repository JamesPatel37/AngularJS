var card1 = new card('Ace', 'Spades'); // Creates the Ace of Spades card
var card2 = new card('9', 'Hearts'); // Creates the 9 of Hearts card

console.log( card1.value() ); // Prints 1
console.log( card1 + " " ); // Ace of Spades

console.log( card2.value() ); // Prints 9
console.log( card2  + " "); // 9 of Hearts

function card(rank, suit) {

  this.rank = rank;
  this.suit = suit;


this.toString = function () {
        console.log(this.rank.toString() + " of " + this.suit.toString());
        return" " ;
};

card.prototype.value = function () {

var rank = this.rank;
  switch (this.rank) {
    case "Ace" :
      rank = "1";
      break;
    case "2" :
      rank = "2";
      break;
    case "3" :
      rank = "3";
      break;
    case "4" :
      rank = "4";
      break;
    case "5" :
      rank = "5";
      break;
    case "6" :
      rank = "6";
      break;
    case "7" :
      rank = "7";
      break;
    case "8" :
      rank = "8";
      break;
    case "9" :
      rank = "9";
      break;
    case "10" :
      rank = "10";
      break;
    case "Jack" :
      rank = "10";
      break;
    case "Queen" :
      rank = "10"
      break;
    case "King" :
      rank = "10"
      break;
    default :
      rank = null;
      break;
  }

  switch (this.suit) {
    case "Clubs" :
      suit = "Clubs";
      break;
    case "Diamonds" :
      suit = "Diamonds"
      break;
    case "Hearts" :
      suit = "Hearts"
      break;
    case "Spades" :
      suit = "Spades"
      break;
    default :
      suit = null;
      break;
  }

  if (rank == null || suit == null) {
      console.log("Enter a valid card");
  } else {
		console.log(rank);

  }
  return "";

 }

}


//var myDeck = new deck();
//myDeck.shuffle();
//var hand1 = [];
//hand1.push( myDeck.deal() );

function deck() {
  var suits = new Array("Hearts", "Clubs", "Spades", "Diamonds");
  var pack = [];
  var n = 52;
  var index = n / suits.length;

  var count = 0;
  for(i = 0; i <= 3; i++)
      for(j = 1; j <= index; j++)
          pack[count++] = j + suits[i];

  return pack;

}

deck.prototype.shuffle = function() {
  var i = pack.length, j, tempi, tempj;
  if (i === 0) return false;
  while (--i) {
     j = Math.floor(Math.random() * (i + 1));
     tempi = pack[i];
     tempj = pack[j];
     pack[i] = tempj;
     pack[j] = tempi;
   }
  return pack;
}
