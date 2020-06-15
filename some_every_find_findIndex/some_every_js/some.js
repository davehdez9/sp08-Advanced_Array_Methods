//-------- some

const words = [
  'immunoelectrophoretically',
  'rotavator',
  'tsktsk',
  'psychophysicotherapeutics',
  'squirrelled',
  'crypt',
  'uncopyrightable',
  'cysts',
  'pseudopseudohypoparathyroidism',
  'unimaginatively',
];

words.some(function (word) {
  return word.length > 25;
});

words.some(function (word) {
  return word.indexOf('thyroid') !== -1;
});

//Ex#2 Some
function muySome(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) return true;
  }
  return false;
}

muySome([4, 5, 6, 7], function (n) {
  return n > 5;
});

// every
words.every(function (w) {
  return w.length >= 5;
});

function allStrings(arr) {
  return arr.every(function (el) {
    return typeof el === 'string';
  });
}

// Ex#2 Every
function muyEvery(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) return false;
  }
  return true;
}

muyEvery([4, 5, 6, 7], function (n) {
  return n > 5;
});

//----------
const btn = document.querySelector('button');
btn.addEventListener('click', function (e) {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const allChecked = Array.from(checkboxes).every(function (checkbox) {
    return checkbox.checked;
  });
  if (!allChecked) alert('Please Agree to everything');
});
