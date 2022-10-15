class HashTable {
  static TABLE_SIZE = 100;

  constructor() {
    /**
     * @type {Array<string>}}
     */
    this.table = [];
  }

  /**
   *
   * @param {string} value
   */
  insert(value) {
    // 既に同じ値が格納されていたら使いまわす（既存のindex番号を返す）
    const storedIndex = this.search(value);
    if (storedIndex !== -1) {
      return storedIndex;
    }

    let i = 0;
    while (true) {
      if (i === HashTable.TABLE_SIZE) {
        throw new Error('Hash table is full.');
      }

      const index = this.hash(value, i);
      if (!this.table[index] && i < HashTable.TABLE_SIZE) {
        this.table[index] = value;
        return index;
      }

      i++;
    }
  }

  /**
   *
   * @param {string} value
   * @returns {number} return index number if exists.  return -1 if not exists.
   */
  search(value) {
    let i = 0;
    while (true) {
      const index = this.hash(value, i);
      const tableValue = this.table[index];
      if (tableValue === value) {
        return index;
      } else if (tableValue !== value && i === HashTable.TABLE_SIZE) {
        return -1;
      }

      i++;
    }
  }

  /**
   *
   * @param {number} index
   * @returns {string}
   */
  find(index) {
    return this.table[index];
  }

  /**
   *
   * @param {string} value
   * @returns {number}
   */
  hash1(value) {
    return value.length % HashTable.TABLE_SIZE;
  }

  /**
   *
   * @param {string} value
   * @returns {number}
   */
  hash2(value) {
    return 1 + (value.length % (HashTable.TABLE_SIZE - 1));
  }

  /**
   *
   * @param {string} value
   * @param {number} i
   * @returns {number}
   */
  hash(value, i) {
    return (this.hash1(value) + i * this.hash2(value)) % HashTable.TABLE_SIZE;
  }
}

const hashTable = new HashTable();
for (let i = 0; i < HashTable.TABLE_SIZE; i++) {
  hashTable.insert(i.toString());
}

const targetValue = '66';
const index = hashTable.search(targetValue);
const value = hashTable.find(index);

console.log({ index, value, isEqual: targetValue === value });
