/* connects the check 'button' to the comparisn function */
document.getElementById('button').addEventListener('click',comparisn)
let userInput = 0 

function comparisn () {
  /* get user input and convert it to an integer */
  userInput = document.getElementById('input').value
  userInput = parseInt(userInput)

  /* check if input is less than 0 */
  if (userInput < 0) {
    document.getElementById('answer').innerHTML = "Negative"
  } else {
    document.getElementById('answer').innerHTML = "Positive"
  }
}
