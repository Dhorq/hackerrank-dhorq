function diagonalDifference(arr) {
  // Write your code here
  let counter = 0;
  let a = 0;
  for (let i = 0; i < arr.length; i++) {
    a += arr[i][i];
  }

  let b = 0;
  for (let j = arr.length - 1; j >= 0; j--) {
    b += arr[counter++][j];
  }

  return Math.abs(a - b);
}
