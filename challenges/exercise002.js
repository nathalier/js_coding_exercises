function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required")
  return sandwich.fillings
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required")
  return person.city === "Manchester"
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required")
  return Math.ceil(people / 40)
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required")
  return arr.filter(animal => animal == "sheep").length
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required")
  return person.address && (person.address.city == "Manchester") && 
          person.address.postCode && (person.address.postCode[0] == "M")
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
}
