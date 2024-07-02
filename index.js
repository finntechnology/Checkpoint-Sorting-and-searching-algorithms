// function insertionSort(arr) {
//   const n = arr.length;

//   for (let i = 1; i < n; i++) {
//     const currentElement = arr[i];
//     let j = i - 1;

//     // Move elements of arr[0..i-1] that are greater than currentElement
//     // to one position ahead of their current position
//     while (j >= 0 && arr[j] > currentElement) {
//       arr[j + 1] = arr[j];
//       j--;
//     }

//     // Insert the currentElement into its correct position
//     arr[j + 1] = currentElement;
//   }

//   return arr;
// }

// // Example usage
// const unsortedArray = [12, 11, 13, 5, 6];
// const sortedArray = insertionSort(unsortedArray);
// console.log("Sorted array:", sortedArray);
