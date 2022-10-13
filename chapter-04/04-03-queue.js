class Process {
  /**
   *
   * @param {string} name
   * @param {number} time
   */
  constructor(name, time) {
    if (time < 1 || 50000 < time) {
      throw new Error('time should be 1 <= time <= 50000');
    }

    this.name = name;
    this.time = time;
  }

  spend(time) {
    this.time -= time;
  }

  isDone() {
    return this.time <= 0;
  }
}

class Queue {
  /**
   *
   * @param {Process} processes
   * @param {number} quantam
   */
  constructor(maxLength = 100000, quantam = 10004) {
    if (maxLength < 1 || 100000 < maxLength) {
      throw new Error('maxLength should be 1 <= maxLength <= 100000');
    }

    if (quantam < 1 || 1000 < quantam) {
      throw new Error('time should be 1 <= time <= 1000');
    }

    this.head = 0;
    this.tail = 0;
    this.maxLength = maxLength;
    this.processes = [];
    this.quantam = quantam;
  }

  isFull() {
    return this.tail - this.head >= this.maxLength;
  }

  isEmpty() {
    return this.head === this.tail;
  }

  /**
   *
   * @param {Process} process
   */
  enqueue(process) {
    if (this.isFull()) throw new Error('Queue is full.');

    this.processes[this.tail] = process;
    this.tail++;
  }

  /**
   *
   * @returns {Process}
   */
  dequeue() {
    if (this.isEmpty()) throw new Error('Queue is empty.');

    const process = this.processes[this.head];
    this.head++;
    return process;
  }
}

function main() {
  const maxLength = 5;
  const quantam = 100;
  const queue = new Queue(maxLength, quantam);
  // queue.dequeue(); // isEmpty : true
  const processes = [
    new Process('p1', 150),
    new Process('p2', 80),
    new Process('p3', 200),
    new Process('p4', 350),
    new Process('p5', 20),
    // new Process('p6', 120), isFull : true
  ];
  processes.forEach((p) => queue.enqueue(p));

  let spentTime = 0;
  while (!queue.isEmpty()) {
    const p = queue.dequeue();
    p.spend(quantam);
    if (!p.isDone()) {
      queue.enqueue(p);
      spentTime += quantam;
    } else {
      spentTime += quantam + p.time;
      console.log(p.name, spentTime);
    }
  }
}

main();
