//2. Perform sorting of an array in descending order.

function sortArrayDescending(array) {
  // Create a compare function that sorts the elements in descending order.
  const compareFunction = (a, b) => {
    return b - a;
  };

  // Sort the array using the compare function.
  array.sort(compareFunction);

  // Return the sorted array.
  return array;
}

// Example usage:
console.log("ascending order: 1, 2, 3, 4, 5");
const array = [1, 5, 3, 2, 4];
const sortedArray = sortArrayDescending(array);

console.log(sortedArray);
