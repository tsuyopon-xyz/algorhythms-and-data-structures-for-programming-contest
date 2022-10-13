/**
 *
 * @param {Array<string>} array
 */
function bubbleSort(array) {
  const copiedArray = [...array];
  for (let i = 0; i < copiedArray.length; i++) {
    for (let j = copiedArray.length - 1; j > i; j--) {
      if (Number(copiedArray[i].charAt(1)) > Number(copiedArray[j].charAt(1))) {
        [copiedArray[i], copiedArray[j]] = [copiedArray[j], copiedArray[i]];
      }
    }
  }

  return copiedArray;
}

/**
 *
 * @param {Array<string>} array
 */
function selectionSort(array) {
  const copiedArray = [...array];

  for (let i = 0; i < copiedArray.length; i++) {
    let minJ = i;
    for (let j = i; j < copiedArray.length; j++) {
      if (
        Number(copiedArray[minJ].charAt(1)) > Number(copiedArray[j].charAt(1))
      ) {
        minJ = j;
      }
    }

    [copiedArray[i], copiedArray[minJ]] = [copiedArray[minJ], copiedArray[i]];
  }

  return copiedArray;
}

function generateRandomCard() {
  const suits = ['S', 'H', 'C', 'D'];
  const numbers = Array.from({ length: 9 }).map((_, i) => i + 1);
  const indexForRandomSuit = Math.floor(Math.random() * suits.length);
  const indexForRandomNumber = Math.floor(Math.random() * numbers.length);

  return `${suits[indexForRandomSuit]}${numbers[indexForRandomNumber]}`;
}

/**
 *
 * @param {Array<string>} bubbleArray
 * @param {Array<string>} selectionArray
 * @returns {boolean}
 */
function isStable(bubbleArray, selectionArray) {
  return bubbleArray.every((_, i) => bubbleArray[i] === selectionArray[i]);
}

// const randomCards = Array.from({ length: 36 }).map((_) => generateRandomCard());
// console.log(randomCards);

// const cards = ['H4', 'C9', 'S4', 'D2', 'C3'];
const cards = ['H3', 'S5', 'D3', 'S1'];

const v1 = bubbleSort(cards);
const v2 = selectionSort(cards);
console.log(v1);
console.log(v2);
console.log(isStable(v1, v2));

// console.time();
// stableSort(array);
// console.timeEnd();
// console.log('array : ', array);
