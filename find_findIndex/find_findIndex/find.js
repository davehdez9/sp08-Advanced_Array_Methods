const scores = [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  55,
  59,
  69,
  73,
  73,
  75,
  79,
  83,
  88,
  91,
  93,
];

// Find
scores.find(function (score) {
  return score > 75;
});

scores.find(function (score) {
  return score !== 0 && score % 2 === 0;
});

const evenScores = scores.filter(function (score) {
  return score % 2 === 0;
});

//How Does it work - find

function myFind(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr) === true) return arr[i];
  }
}
myFind(scores, function (score) {
  return score > 91;
});

// FindIndex
const firstEven = scores.findIndex(function (score) {
  return score !== 0 && score % 2 === 0;
});

scores.findIndex(function (scores) {
  return scores > 100;
});

function partition(arr, pivot) {
  const pivotIdx = arr.findIndex(function (el) {
    return el > pivot;
  });
  const left = arr.slice(0, pivotIdx);
  const right = arr.slice(pivotIdx);
  return [left, right];
}

//How Does it work - findIndex
function myFindIndex(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr) === true) return i;
  }
  return -1;
}

myFindIndex(scores, function (score) {
  return score !== 0 && score % 2 === 0;
});
