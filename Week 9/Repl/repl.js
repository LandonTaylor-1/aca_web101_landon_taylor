   
const wordArr = ['waffle', 'whimper', 'sneeze', 'shindig', 'leopard', 'whisper', 'elegant']
function printOutWord(arr) {
  for (let i = 0; i < wordArr.length; i++) {
    console.log(wordArr[i]);
  }
}
printOutWord(wordArr)



function addNums(a, b) {
  return a + b
}
addNums(3, 8) // => 11



const exampleArr = [1, 0, 9, 18, 3, 0, 0, 9, 70, 44, 0]
function removeZeros(arr) {
  for (let i = exampleArr.length; i >= 0; i--) {
  if (exampleArr[i] === 0)
  exampleArr.splice(i, 1)
}
return exampleArr
}
removeZeros(exampleArr) // => [1, 9, 18, 3, 9, 70, 44]



function fizzBuzz() {
    var badges = document.getElementById('badges');
      for (let i = 0; i < 1001; i++) {
        if (i % 15 === 0) {
          badges.insertAdjacentHTML('beforeend',
            '<ul><div class="badge badge-pill badge-warning">FizzBuzz</div></ul>');
        } else if (i % 3 === 0) {
          badges.insertAdjacentHTML('beforeend', 
            '<ul><div class="badge badge-pill badge-secondary">Fizz</div></ul>');
        } else if (i % 5 === 0) {
          badges.insertAdjacentHTML('beforeend', 
            '<ul><div class="badge badge-pill badge-info">Buzz</div></ul>');
        } else {
          badges.insertAdjacentHTML('beforeend', 
             '<ul><div class="badge badge-dark">$[i]</div></ul>');
        }
      }
  }