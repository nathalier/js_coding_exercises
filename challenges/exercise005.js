const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  var pos = nums.indexOf(n);
  if (pos >= 0 && pos < nums.length - 1) 
    return nums[pos + 1];
  return null 
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  var result = {1:0, 0:0};
  for (const c of str)
    if (c == "1") result[1]++
    else if (c == "0") result[0]++;
  return result;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  return Number(n.toString().split("").reverse().join(""))
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  return arrs.flat().reduce((a, b) => a + b)
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  var arrRes = arr.slice();
  if (arrRes.length > 1)
    [arrRes[0], arrRes[arrRes.length - 1]] = [arrRes[arrRes.length - 1], arrRes[0]];
  return arrRes
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  const searchTermLow = searchTerm.toLowerCase()
  for (const key in haystack)
    if ((typeof haystack[key] === "string") && haystack[key].toLowerCase().includes(searchTermLow))
      return true;
  return false;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  var words = str.toLowerCase().match(/\w+/g);
  var result = {};
  for (const word of words)
    result[word] = (result[word] || 0) + 1;
  return result
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
