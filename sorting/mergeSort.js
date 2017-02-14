var array = [4, 2, 7, 5, 78, 45, 1, 100, 3, 7, 56, 378, 34, 25, 90, 8, 9];

var res = mergeSort(array);
console.log(res);

function mergeSort(array) {
  var array0 = array.slice(0, (array.length / 2));
  var array1 = array.slice((array.length / 2));
  var result = [];
  var i = 0;

  while (array0.length > 0 && array1.length > 0) {
    array0 = mergeSort(array0);
    array1 = mergeSort(array1);

    if (array0[0] > array1[0]) {
      result[i] = array1[0];
      array1.splice(0, 1);
    }
    else {
      result[i] = array0[0];
      array0.splice(0, 1);
    }
    i++;
  }

  if (array0.length > 0) {
    result = result.concat(array0);
  }
  if (array1.length > 0) {
    result = result.concat(array1);
  }

  return result;
}