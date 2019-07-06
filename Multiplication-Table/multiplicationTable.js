// Write a program that prints a multiplication table for numbers up to 12.

let result = "x";
for (let i = 0; i < 11; i++) {
  for (let j = 0; j < 11; j++) {
    if (i == 0 && j > 0) {
      result += `[${j}]`;
    } else if (j == 0 && i > 0) {
      result += `[${i}]`;
    } else if (i > 0 && j > 0) {
      result += `${i * j} `;
    }
  }
  result += "\n";
}
console.log(`\n ${result}`);
