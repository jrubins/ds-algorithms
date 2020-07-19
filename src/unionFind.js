// A, B, C, D, E, F, G, H, I, J
class UnionFind {
  constructor(nodes) {
    this.bijection = {};
    this.list = [];

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      this.bijection[node] = i;
      this.list[i] = i;
    }
  }

  find(node) {
    const nodeIndex = this.bijection[node];
    let nextIndex = this.list[nodeIndex];
    console.log("Node index:", node, nodeIndex, nextIndex);
    if (nextIndex === nodeIndex) {
      return nodeIndex;
    }

    while (this.list[nextIndex] !== nextIndex) {
      nextIndex = this.list[nextIndex];
    }

    return nextIndex;
  }

  union(node, node2) {
    const nodeRootIndex = this.find(node);
    const node2RootIndex = this.find(node2);
    console.log(
      "node root index:",
      nodeRootIndex,
      "node 2 root index:",
      node2RootIndex
    );

    // TODO: Track size and merge smaller component into larger component (empirical tests
    // show this gives a slight performance boost).
    this.list[this.bijection[node]] = node2RootIndex;
  }
}

// Left child: 2i + 1, Right child: 2i + 2, Parent: (child - 1) / 2

const uf = new UnionFind(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]);
uf.union("A", "B");
uf.union("C", "D");
uf.union("E", "F");
uf.union("G", "H");
uf.union("I", "J");
uf.union("J", "G");
uf.union("H", "F");
uf.union("A", "C");
uf.union("D", "E");
uf.union("G", "B");
uf.union("I", "J");
console.log(uf.bijection, uf.list);
