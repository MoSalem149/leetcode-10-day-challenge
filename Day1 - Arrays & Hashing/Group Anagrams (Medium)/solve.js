var groupAnagrams = function (strs) {
  let anagramsObj = {};
  for (const word of strs) {
    let key = word.split("").sort().join("");
    if (!anagramsObj[key]) {
      anagramsObj[key] = [];
    }
    anagramsObj[key].push(word);
  }
  return Object.values(anagramsObj);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])); // [[""]]
console.log(groupAnagrams(["a"])); // [["a"]]

