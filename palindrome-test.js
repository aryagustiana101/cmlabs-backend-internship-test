const isPalindrome = (value, i) => {
  if (i < value.length / 2) {
    if (value[i] != value[value.length - 1 - i]) {
      return false;
    } else {
      return isPalindrome(value, i + 1);
    }
  } else {
    return true;
  }
};

console.info(isPalindrome("arya", 0)); // false
console.info(isPalindrome("noon", 0)); // true
