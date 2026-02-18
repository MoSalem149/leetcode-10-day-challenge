var groupAnagrams = function (strs) {
  let anagramsObj = {};
  for (word of strs) {
    let key = word.split("").sort().join("");
    if (!anagramsObj[key]) {
      anagramsObj[key] = [];
    }
    anagramsObj[key].push(word);
  }
  return Object.values(anagramsObj);
};

console.log(["eat", "tea", "tan", "ate", "nat", "bat"]); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log([""]); // [[""]]
console.log(["a"]); // [["a"]]
