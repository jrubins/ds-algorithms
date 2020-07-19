class PriorityQueue {
  constructor() {
    this.binaryHeap = [];
  }

  add(item) {
    if (this.binaryHeap.length === 0) {
      this.binaryHeap[0] = item;
      return;
    }

    let insertionIndex = this.binaryHeap.length;
    let parentIndex = Math.floor((insertionIndex - 1) / 2);
    console.log("Insertion:", insertionIndex, "Parent:", parentIndex);

    this.binaryHeap[insertionIndex] = item;

    let currentEl = item;
    while (parentIndex >= 0 && this.binaryHeap[parentIndex] > item) {
      const temp = this.binaryHeap[parentIndex];
      this.binaryHeap[parentIndex] = item;
      this.binaryHeap[insertionIndex] = temp;

      parentIndex = Math.floor((parentIndex - 1) / 2);
      console.log("Insertion:", insertionIndex, "Parent:", parentIndex);
    }
  }
}

// Left child: 2i + 1, Right child: 2i + 2, Parent: (child - 1) / 2

const pq = new PriorityQueue();
pq.add(6);
pq.add(4);
pq.add(3);
pq.add(7);
console.log(pq.binaryHeap);
