/* Created by tanuha on 2/14/17 - bubble sort */
var array = [3, 2, 6, 5, 7, 8, 1, 13, 18, 9, 11, 29];
console.log(array, "initial array");

console.log(bubbleSort(array), "res");

function bubbleSort(array) {
  for (var i = (array.length - 1); i > 0; i--) {
    var counter = 0;
    for (var j = 0; j < i; j++) {
      if (array[j] > array[j+1]) {
        var temp = array[j];
        array[j] = array[j+1]
        array[j+1] = temp;
        counter++;
      }
    }
    // console.log(array);
    if (counter == 0) {
      break;
    }
  }
  return array;
}
