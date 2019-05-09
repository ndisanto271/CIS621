// cards array holds all cards
let card = document.getElementsByClassName("card");
let cards = [...card]

// deck of all cards in game
const deck = document.getElementById("card-deck");

// declaring move variable
let moves = 0;
let counter = document.querySelector(".moves");

// declaring variable of matchedCards
let matchedCard = document.getElementsByClassName("match");

// close icon in modal
let closeicon = document.querySelector(".close");

// modal
let modal = document.getElementById("popup1")

// array for opened cards
var openedCards = [];




// start game on load
document.body.onload = startGame();


// start game - resets values to default.
function startGame(){
    // shuffle deck
    cards = shuffle(cards);
    // remove all classes from each card
    for (var i = 0; i < cards.length; i++){
        deck.innerHTML = "";
        [].forEach.call(cards, function(item) {
            deck.appendChild(item);
        });
        cards[i].classList.remove("show", "open", "match", "disabled");
    }
    //enable image upload
    enableUpload();
    // reset moves
    moves = 0;
    counter.innerHTML = moves;
    //reset timer
    second = 0;
    minute = 0;
    hour = 0;
    var timer = document.querySelector(".timer");
    timer.innerHTML = "0 mins 0 secs";
    clearInterval(interval);
}

//shuffle array of cards
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};



//  toggles card
var displayCard = function (){
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");

};


// checks if opened cards are match
function cardOpen() {
    openedCards.push(this);
    var len = openedCards.length;
    if(len === 2){
        moveCounter();
        if(openedCards[0].type === openedCards[1].type){
            matched();
        } else {
            unmatched();
        }
    }
};


// matched cards inactive - transition visibility
function matched(){
    openedCards[0].classList.add("match", "disabled");
    openedCards[1].classList.add("match", "disabled");
    disable()
    setTimeout(function () {
        openedCards[0].classList.remove("show", "open", "no-event");
        openedCards[1].classList.remove("show", "open", "no-event");
        enable();
        openedCards = [];
    },1100)

}


// mismatch , set delay for animations
function unmatched(){
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(function(){
        openedCards[0].classList.remove("show", "open", "no-event","unmatched");
        openedCards[1].classList.remove("show", "open", "no-event","unmatched");
        enable();
        openedCards = [];
    },1100);
}


// disable cards
function disable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.add('disabled');
    });
}


// enable cards
function enable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.remove('disabled');
        for(var i = 0; i < matchedCard.length; i++){
            matchedCard[i].classList.add("disabled");
        }
    });
}

// move counter
function moveCounter(){
    moves++;
    counter.innerHTML = moves;
    //start timer after first move
    if(moves == 1){
        second = 0;
        minute = 0;
        hour = 0;
        startTimer();
        disableUpload();
    }
}


// game timer
var second = 0, minute = 0; hour = 0;
var timer = document.querySelector(".timer");
var interval;
function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute+"mins "+second+"secs";
        second++;
        if(second == 60){
            minute++;
            second=0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
}


// win popup using modal
function congratulations(){
    if (matchedCard.length == 16){
        clearInterval(interval);
        finalTime = timer.innerHTML;

        //
        modal.classList.add("show");


        //showing move, time on modal
        document.getElementById("finalMove").innerHTML = moves;
        document.getElementById("totalTime").innerHTML = finalTime;


        closeModal();
    }
}


// close popup
function closeModal(){
    closeicon.addEventListener("click", function(e){
        modal.classList.remove("show");
        startGame();
    });
}


// play again button
function playAgain(){
    modal.classList.remove("show");
    startGame();
}


// adds event listeners to each card.
for (var i = 0; i < cards.length; i++){
    card = cards[i];
    card.addEventListener("click", displayCard);
    card.addEventListener("click", cardOpen);
    card.addEventListener("click",congratulations);
    //card.addEventListener("click",showImage);
}

//cant change images after first move
function disableUpload() {
    $('#file').attr('disabled','disabled');
}
//enables button on reload
function enableUpload(){
    $('#file').removeAttr('disabled');
}

// reads in custom images and replaces defaults
// if less than 8 images, leftovers will use default images
function readURL() {


    var files = document.querySelector('input[type=file]').files;
    var fileLength = document.querySelector('input[type=file]').files.length;
    var count = 0;
      function readFile(file){
          var reader = new FileReader();
//add duplicate image check
// reset to defaults on click for sync?
          reader.addEventListener("load",function () {

              if(!/\.(jpe?g|png|gif)$/i.test(file.name)) //extension format taken from stack overflow.
              {
                  //if file extension is invalid, skip src change and increment
                  count++;
              }
              else {

                  if (count === 0 && count < fileLength) {
                      $('#imgAT1').attr('src', this.result);
                      $('#imgAT2').attr('src', this.result);
                      count++;
                  } else if (count === 1 && count < fileLength) {
                      $('#imgBattery').attr('src', this.result);
                      $('#imgBattery2').attr('src', this.result);
                      count++;
                  } else if (count === 2 && count < fileLength) {
                      $('#imgDownload1').attr('src', this.result);
                      $('#imgDownload2').attr('src', this.result);
                      count++;
                  } else if (count === 3 && count < fileLength) {
                      $('#imgVolume1').attr('src', this.result);
                      $('#imgVolume2').attr('src', this.result);
                      count++;
                  } else if (count === 4 && count < fileLength) {
                      $('#imgWifi1').attr('src', this.result);
                      $('#imgWifi2').attr('src', this.result);
                      count++;
                  } else if (count === 5 && count < fileLength) {
                      $('#imgTV1').attr('src', this.result);
                      $('#imgTV2').attr('src', this.result);
                      count++;
                  } else if (count === 6 && count < fileLength) {
                      $('#imgLock1').attr('src', this.result);
                      $('#imgLock2').attr('src', this.result);
                      count++;
                  } else if (count === 7 && count < fileLength) {
                      $('#imgTrash1').attr('src', this.result);
                      $('#imgTrash2').attr('src', this.result);
                      count++;
                  } else {
                      // if more than 8 do nothing
                      //lazy , put cap on later
                  }

              }


          },false);


          reader.readAsDataURL(file);
      }

        [].forEach.call(files,readFile);

   // $(".card img").visibility =false;



};
