// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
// const modal = document.getElementById("modal")
//   modal.className ="hidden"
// const errorMessage = document.getElementById("modal-message")
// const hearts = document.getElementsByClassName("like-glyph")
// const body = document.getElementsByTagName('body')[0];

// Your JavaScript code goes here!
let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};


let colorStates = {
  "red" : "",
  "": "red"
};


//hidden field  - form
let modal = document.getElementById("modal")
modal.className = "hidden"


// like hearts class
let likeGlyph = document.getElementsByClassName("like-glyph")

for (let glyph of likeGlyph) {
  glyph.addEventListener("click", clickHeart);
}

function clickHeart(event) {
  let heart = event.target
  mimicServerCall()
  .then(function() {
    // heart.innerText = glyphStates[heart.innerText];
    // heart.style.color = colorStates[heart.style.color];
    if (heart.innerText === EMPTY_HEART) {
      heart.className = "activated-heart" 
      heart.innerText = FULL_HEART
    }
    else {
      heart.className = "like-glyph"
      heart.innerText = EMPTY_HEART
    }
  })
  .catch(function(error) {
    modal.className = ""
    let modalMessage = document.getElementById("modal-message")
    modalMessage.innerText = error
    setTimeout(function() {
      modal.className = "hidden"
    },
    5000)
  })
  //.catch(error => modal.innerText = error)
}

// Other way
// document.addEventListener('DOMContentLoaded', function() {


//   body.addEventListener('click', handleClick)

//   function handleClick(event) {   
//     if (event.target.classList.contains("like-glyph")) {
//       heart = event.target

//       mimicServerCall()
//       .then(function(response){
//         console.log(response)
//         if (heart.className === "like-glyph activated-heart"){
//           heart.innerText = EMPTY_HEART
//           heart.className = "like-glyph"
//         }
//         else {
//         heart.className = "like-glyph activated-heart"
//         heart.innerText = FULL_HEART
//         }
//       })
//       .catch(function(error){
//         console.log(error)
//         modal.className = ""
//         errorMessage.innerText = error
//         setTimeout(function(){ modal.className ="hidden"; }, 5000);
//       }) 
//     }    
//   }
// })



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
