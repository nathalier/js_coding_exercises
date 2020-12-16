function capitalize(word) {
  if (word === undefined) throw new Error("word is required")
  return word.substring(0, 1).toUpperCase() + word.substring(1, word.length)
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required")
  if (lastName === undefined) throw new Error("lastName is required")
  return firstName.substring(0, 1).toUpperCase() + "." + lastName.substring(0, 1).toUpperCase()
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied")
  if (vatRate === undefined) throw new Error("vatRate is required")
  return Math.round(originalPrice * (1 + vatRate / 100) * 100) / 100
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required")
  if (reduction === undefined) throw new Error("reduction is required")
  return Math.round(originalPrice * (1 - reduction / 100) * 100) / 100
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required")
  return str.substring(Math.floor((str.length - 1) / 2), Math.floor(str.length / 2) + 1)
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required")
  return word.split("").reverse().join("")
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required")
  return words.map(reverseWord)
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required")
  let count = 0
  users.forEach(user => {if (user.type === "Linux") count++})
  return count
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required")
  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length * 100) / 100 || 0
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required")
  let result = ""
  result += n % 3 == 0 ? "fizz" : ""
  result += n % 5 == 0 ? "buzz" : ""
  return result || n
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
}
