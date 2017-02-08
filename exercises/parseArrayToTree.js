category = [
  {id: "animals", parent: null},
  {id: "mammals", parent: "animals"},
  {id: "cats", parent: "mammals"},
  {id: "dogs", parent: "mammals"},
  {id: "alliance", parent: null},
  {id: "labrador", parent: "dogs"},
  {id: "chihuahua", parent: "dogs"},
  {id: "siamese", parent: "cats"},
  {id: "persian", parent: "cats"},
  {id: "ee", parent: "dare"},
  {id: "sdw", parent: "ee"},
  {id: "dare", parent: null},
  {id: "animals1", parent: null},
  {id: "animals2", parent: "animals1"},
  {id: "animals3", parent: "animals2"},
  {id: "animals4", parent: "animals3"},
  {id: "animals5", parent: "animals4"},
  {id: "animals6", parent: "animals5"},
  {id: "animals7", parent: "animals6"},
  {id: "animals8", parent: "animals7"},
  {id: "animals9", parent: "animals8"},
  {id: "animals10", parent: "animals9"},
  {id: "animals11", parent: "animals10"},
  {id: "animals12", parent: "animals11"},
  {id: "animals13", parent: "animals12"},
  {id: "animals14", parent: "animals13"},
  {id: "animals15", parent: "animals14"}
];

var expected = {};

function parceArrayToTree(arr) {
  arr.forEach(function (item) {
    expected[item.id] = {};
  });

  makeTreeOfElements(expected, arr);

  return expected = JSON.stringify(expected, "", 1);
}

function makeTreeOfElements(result, arr) {
  for (var id in result) {
    arr.forEach(function (item) {
      if (id === item.parent) {
        result[id][item.id] = {};
        delete result[item.id];
        delete expected[item.id];

        makeTreeOfElements(result[id], arr);
      }
    });
  }
  return result;
}

parceArrayToTree(category);

console.log(expected);
