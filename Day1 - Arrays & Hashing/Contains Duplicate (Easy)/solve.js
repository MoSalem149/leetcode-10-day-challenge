// O(n²) في nested loops
var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) return true;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true

// Set أسرع جدًا لأنه O(n)
var containsDuplicateSet = function (nums) {
  let seen = new Set();
  for (const num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;
};

console.log(containsDuplicateSet([1, 2, 3, 1])); // true
console.log(containsDuplicateSet([1, 2, 3, 4])); // false
console.log(containsDuplicateSet([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true

