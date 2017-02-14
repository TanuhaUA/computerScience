var array = [9, 8, 7, 6, 5, 4, 3, 16, 0, 10, 11, 12, 13, 14, 15, 16, 1, 20, 25, 60, 43, 12, 19, 90, 2];
// array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
// array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// array = [9, 9, 9, 9, 9, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3];

console.log(array, array.length, "initial array");

var res = qsort(array);
console.log(res, res.length, "result");

function qsort(right) {
  var rightLength = right.length;
  var pivot = right[rightLength - 1];
  var j = 0;
  var i = -1;

  for (var j = 0; j < rightLength; j++) {
    if (right[j] < pivot) {
      i++;
      var temp = right[j];
      right[j] = right[i];
      right[i] = temp;
    }
    if (j === (rightLength - 1)) {
      right.splice(++i, 0, pivot);
      right.splice(right.length - 1, 1);
      // console.log(right, "last iteration");

      var newRight = right.slice(i + 1);
      var newLeft = right.slice(0, i);
      // console.log("newLeft", newLeft, "newRight", newRight, "Pivot", pivot);

      if (newRight.length > 1) {
        newRight = qsort(newRight);
      }
      if (newLeft.length > 1) {
        newLeft = qsort(newLeft);
      }
      newRight = newLeft.concat(pivot, newRight);
      // console.log(newRight, "concat newRight");
    }
  }
  return newRight;
}