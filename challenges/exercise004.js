function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required")
  return nums.filter(x => x < 1)
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required")
  if (!char) throw new Error("char is required")
  return names.filter(x => x && x[0] == char)
}

function findVerbs(words) {
  if (!words) throw new Error("words is required")
  return words.filter(x => x.length > 3 && x.substring(0, 3) == "to ")
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required")
  return nums.filter(x => Math.round(x) === x)
}

function getCities(users) {
  if (!users) throw new Error("users is required")
  return users.map(x => x.data.city.displayName)
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required")
  return nums.map(x => Math.round(Math.sqrt(x) * 100) / 100)
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required")
  if (!str) throw new Error("str is required")
  return sentences.filter(x => x.toLowerCase().includes(str.toLowerCase()))
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required")
  return triangles.map(x => Math.max(...x))
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
}
