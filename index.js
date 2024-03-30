// Code your solutions in this file
for(let age=30;age<40;age++){
    console.log(`I am ${age} years old.Happy birthday to me!`);

}
// Using for with Arrays
const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts){
    for(let i=0;i<gifts.length;i++){
        console.log(`Wrapped ${gifts} and added a bow!`);
        debugger;
    }
    return gifts;
}
wrapGifts(gifts);
//assignment
let cards = ['Guadalupe', 'Ollie', 'Aki'];
let action='surprise';
function writeCards(cards, action){
    
    let cardMessages = [];
    for(let i=0;i<cards.length;i++){
        cardMessages.push(`Thank you, ${cards[i]}, for the wonderful ${action} gift!`);
       
    }
    return cardMessages;
}
let cardsNew = writeCards(cards, action);
console.log(cardsNew);

//assignment 2
const giftsAll =  ["teddy bear", "drone", "doll","flower"];
function wrappedGift(giftsAll){
    let i=0;
    while (i<giftsAll.length) {
        console.log(`Wrapped ${giftsAll[i]} and added a bow!`);
    i++; // the iteration moves INSIDE the body of the loop!

        
    }
    return giftsAll;
}
wrappedGift(giftsAll);


function countDown(startingNumber) {

    if (startingNumber < 0) {
        console.log("Please provide a positive integer.");
        return;
    }

    while (startingNumber >= 0) {
        console.log(startingNumber);
        startingNumber--;
    }
}

countDown(25);





