// Problem 47: Longest Word in a Sentence  [Easy]
// Description: Write a function longestWord(sentence) that returns the longest word in a sentence. If there's a tie, return the first one.
// Example:
// Input: 'The quick brown fox'Output: 'quick'
// Hint: Split the sentence and use reduce() to track the longest.



function LongestWord (str: string):string{
    let longest: string = ""
    const wordsArr = str.split(" ")
    for (const words of wordsArr){
        if(words.length > longest.length){
            longest = words;
        }
    }


    return longest;
}

console.log(LongestWord("the quick brown fox"));