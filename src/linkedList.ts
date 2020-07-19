interface LinkedListNode<T> {
  next: LinkedListNode<T> | null
  value: T
}

export class LinkedList<T> {
  head: LinkedListNode<T> | null

  constructor(value: T) {
    this.add(value)
  }

  add(value: T) {
    const newNode = { next: null, value }
    if (!this.head) {
      this.head = newNode
      return
    }

    let currentNode = this.head
    while (currentNode.next) {
      currentNode = currentNode.next
    }

    currentNode.next = newNode
  }

  remove(value: T): boolean {
    if (!this.head) {
      return false
    }

    if (this.head.value === value) {
      this.head = this.head.next
      return true
    }

    let currentNode = this.head
    while (currentNode.next && currentNode.next.value !== value) {
      currentNode = currentNode.next
    }

    if (currentNode && currentNode.next) {
      currentNode.next = currentNode.next.next
      return true
    }

    return false
  }

  print(): string {
    let currentNode: LinkedListNode<T> | null = this.head
    if (!currentNode) {
      return ''
    }

    let repr = `${currentNode.value}`
    while (currentNode.next) {
      currentNode = currentNode.next
      repr = `${repr} => ${currentNode.value}`
    }

    return repr
  }
}
