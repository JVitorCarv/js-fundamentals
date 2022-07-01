const grades = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// Without callback
let lowScore = [];
for (let i in grades) {
  if (grades[i] < 7) {
    lowScore.push(grades[i]);
  }
}

console.log(lowScore);

// With callback
let approvedScore = grades.filter((grade) => grade >= 7);
console.log(approvedScore);
