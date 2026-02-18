var isAnagram = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
