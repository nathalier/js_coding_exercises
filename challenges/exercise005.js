const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required")
  if (n === undefined) throw new Error("n is required")
  let pos = nums.indexOf(n)
  return (pos >= 0 && pos < nums.length - 1) ? nums[pos + 1] : null
}

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required")
  let result = {1:0, 0:0}
  let arr = [...str].map(digit => parseInt(digit))
  arr.forEach(digit => result[digit]++)
  return result
}

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required")
  return Number(n.toString().split("").reverse().join(""))
}

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required")
  return arrs.flat().reduce((a, b) => a + b)
}

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required")
  let arrRes = arr.slice()
  if (arrRes.length > 1)
    [arrRes[0], arrRes[arrRes.length - 1]] = [arrRes[arrRes.length - 1], arrRes[0]]
  return arrRes
}

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required")
  if (searchTerm === undefined) throw new Error("searchTerm is required")
  const searchTermLow = searchTerm.toLowerCase()
  return Object.keys(haystack).some(property =>
    (typeof haystack[property] === "string") && haystack[property].toLowerCase().includes(searchTermLow))
}

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required")
  let words = str.toLowerCase().match(/\w+/g)
  let result = {}
  words.forEach(word => result[word] = (result[word] || 0) + 1)
  return result
}

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
}
