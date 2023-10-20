// c

function reverseWords() {
 // Prompt the user to enter a sentence.
  const sentence = prompt('Enter a sentence: ');

  // Split the sentence into words.
  const words = sentence.split(' ');

  // Reverse each word.
  const reversedWords = words.map(word => {
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    return reversedWord;
  });

  // Join the reversed words back into a sentence.
  const reversedSentence = reversedWords.join(' ');

  // Display the reversed sentence to the user.
  alert(reversedSentence);
}

// Example usage:
reverseWords();
