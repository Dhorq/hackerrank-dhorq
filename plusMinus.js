function plusMinus(arr) {
  // Write your code here
  const negative = [];
  const positive = [];
  const zero = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negative.push(arr[i]);
    } else if (arr[i] > 0) {
      positive.push(arr[i]);
    } else {
      zero.push(arr[i]);
    }
  }
  let positiveResult = (positive.length / arr.length).toFixed(5);
  let negativeResult = (negative.length / arr.length).toFixed(5);
  let zeroResult = (zero.length / arr.length).toFixed(5);

  console.log(positiveResult);
  console.log(negativeResult);
  console.log(zeroResult);
}
