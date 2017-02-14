array = [6, 4, 2, 1, 5, 3, 8];
console.log(array.length, "first array");

var res = qsort(array, "first");
console.log(res, "res");

function qsort(array, flag) {
  var res = [];
  var arrayLength = array.length;
  var pivot = array[arrayLength - 1];
  var i = -1;

  var left = [];
  var right = [];

  for (var j = 0; j < arrayLength; j++) {
    console.log("array", array, flag);
    if (array[j] < pivot) {

      i++;
      var tempJ = array[j];
      array[j] = array[i];
      array[i] = tempJ;
    }
    if (j === (arrayLength - 1)) {
      array.splice(++i, 0, pivot);
      array.splice(array.length - 1, 1);

      left = array.slice(0, i);
      right = array.slice(i + 1);

      qsort(left, "left");
      qsort(right, "right");
      res = left.concat(pivot, right);
      // console.log("left", left, "right", right, "currentPivot", currentPivot);
    }
  }

  return res;
}

//
// function qsort(array) {
//   var right = array;
//   var rightLength = right.length;
//   var pivot = right[rightLength - 1];
//   var i = -1;
//
//   var left = [];
//
//   for (var j = 0; j < rightLength; j++) {
//     if (right[j] < pivot) {
//       var tempJ = right[j];
//       i++;
//       right[j] = right[i];
//       right[i] = tempJ;
//     }
//     if (j === (rightLength - 1)) {
//       right.splice(++i, 0, pivot);
//       right.splice(right.length - 1, 1);
//
//       left = right.slice(0, i);
//       var pivotRight = right[i];
//
//       right = right.slice(i + 1);
//
//       qsort(right);
//       qsort(left);
//     }
//   }
//
//   return left.concat(pivot, right);
// }

