// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById("modal");
const heart = document.querySelectorAll("span");

for (const hts of heart){
  hts.addEventListener("click",fncc)
}

function fncc(e){
  const item = e.target;
  console.log(e)
  mimicServerCall()
  .then(function(){    
    if (item.innerText == FULL_HEART)
    { item.innerText = EMPTY_HEART; item.className = "like-glyph"}
    else if (item.innerText == EMPTY_HEART)
    { item.innerText = FULL_HEART; item.className ="activated-heart"};
  })
  .catch(function(error){
    document.getElementById("modal-message").innerText = error;
    modal.className = "";
    setTimeout(() => {modal.className ="hidden"}, 3000);      
  });       
  }
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
