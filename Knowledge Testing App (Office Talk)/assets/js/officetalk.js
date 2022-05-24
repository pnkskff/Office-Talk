//var answerName = document.getElementById('#answer'.value)
//var firstName = document.getElementById('#hiddenAnswer'.value)
//
//document.querySelector('#quote').addEventListener('click', showQuote)
//
//function showQuote(){
//    fetch('https://www.officeapi.dev/api/quotes/random')
//    .then(res => res.json()) // parse response as JSON
//    .then(data => {
//      console.log(data)
//      document.querySelector('.quoteGoesHere').innerText = data.data.content
//      document.querySelector('#hiddenAnswer').innerText = data.data.character.firstname
//    })
//    .catch(err => {
//        console.log(`error ${err}`)
//    });
//}
//
//document.querySelector('#answerButton').addEventListener('click', answerField)
//
//function answerField(){
//
//  const correctResponse = 'Correct! You win a Dundie!'
//  const incorrectResponse = 'Incorrect! Don\'t be an ignorant Slut!'
//
//  if (answerName === firstName){
//    document.querySelector('#resultGoesHere').innerText = correctResponse
//  } else if (answerName != firstName){
//    document.querySelector('#resultGoesHere').innerText = incorrectResponse
//  }
//}
//

document.querySelector('#quote').addEventListener('click', showQuote)

var firstName = ''

function showQuote(){
    fetch('https://www.officeapi.dev/api/quotes/random')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('.quoteGoesHere').innerText = data.data.content
      firstName = data.data.character.firstname
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

document.querySelector('#answerButton').addEventListener('click', answerField)

function answerField(){
var answerName = document.getElementById("answer").value

  const correctResponse = 'Correct! You win a Dundie!'
  const incorrectResponse = 'Incorrect! Don\'t be an ignorant Slut!'

  if (answerName === firstName){
    document.querySelector('.resultGoesHere').innerText = correctResponse
  } else {
    document.querySelector('.resultGoesHere').innerText = incorrectResponse
  }
}
