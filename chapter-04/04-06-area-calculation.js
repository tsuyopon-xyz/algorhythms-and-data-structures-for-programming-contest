const input = '\\\\///\\_/\\/\\\\\\\\/_/\\\\///__\\\\\\_\\\\/_\\/_/\\';
// input is : \\///\_/\/\\\\/_/\\///__\\\_\\/_\/_/\

const splittedInputs = input.split('');
console.log(splittedInputs);

const s1 = [];
const s2 = [];
let sum = 0;

splittedInputs.forEach((v, i) => {
  if (v === '\\') s1.push(i);
  if (v === '/' && s1.length > 0) {
    const partnerIndex = s1.pop();
    sum += i - partnerIndex;
  }
});
console.log(s1, sum);
