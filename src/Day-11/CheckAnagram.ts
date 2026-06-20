// Problem 42: Check Anagram  [Easy]
// Description: Write a function isAnagram(str1, str2) that returns true if the two strings are anagrams of each other.
// Example:
// Input: 'listen', 'silent'  → Output: trueInput: 'hello', 'world'   → Output: false
// Hint: Sort both strings and compare, or use a character frequency map.

function isAnagram(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) return false;

  const charCount: Record<string, number> = {};

  for (let i = 0; i < str1.length; i++) {
    charCount[str1[i]] = (charCount[str1[i]] || 0) + 1;
    charCount[str2[i]] = (charCount[str2[i]] || 0) - 1;
  }

  for (const char in charCount) {
    if (charCount[char] !== 0) return false;
  }

  return true;
}