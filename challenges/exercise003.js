function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required")
  return nums.map(x => x ** 2)
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required")
  return words.reduce((a, b) => a + b.substring(0, 1).toUpperCase() + b.substring(1, b.length))
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required")
  let count = 0
  people.forEach(person => count += person.subjects.length)
  return count
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required")
  if (!ingredient) throw new Error("ingredient is required")
  return menu.some(item => item.ingredients.includes(ingredient))
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required")
  if (arr2 === undefined) throw new Error("arr2 is required")
  return [...new Set(arr1.filter(value => arr2.includes(value)))].sort()
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
}
