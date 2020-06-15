const nums = [20, 30, 50, 12, -2, 45, 99, 19, 22, 85];

let total = 0;
for (num of nums) {
  total = +num;
}
console.log(total);

let min = nums[0];
for (let i = 1; i < nums.length; i++) {
  if (nums[i] < min) min = nums[i];
}
console.log(min);

const str = 'lollapalooza';
const charFreq = {};
for (let char of str) {
  if (charFreq[char]) {
    charFreq[char] += 1;
  } else {
    charFreq[char] = 1;
  }
}

//Using Reduce
const words = ['hello', 'I', 'love', 'you'];
const result = words.reduce(function (accum, nextword) {
  console.log(accum, nextword);
  return accum + nextword;
});

const midtermScores = [70.88, 93, 94, 64, 62, 56];
const finalScores = [92, 93, 76, 77, 78, 59, 61];
// const minScore = midtermScores.reduce(function (min, nextScore) {
//   if (nextScore < min) {
//     return nextScore;
//   }
//   return min;
// });
const minScore = midtermScores.reduce(function (min, nextScore) {
  return nextScore < min ? nextScore : min;
});

const maxScore = midtermScores.reduce(function (max, nextScore) {
  return nextScore > max ? nextScore : max;
});

// const minFinalScore = finalScores.reduce(function (min, nextScore) {
//   return nextScore < min ? nextScore : min;
// });

const minOverallScore = finalScores.reduce(function (min, nextScore) {
  return nextScore < min ? nextScore : min;
}, minScore);
