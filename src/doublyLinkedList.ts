interface LinkedListNode<T> {
  next: LinkedListNode<T> | null
  prev: LinkedListNode<T> | null
  value: T
}

export class DoublyLinkedList<T> {
  head: LinkedListNode<T> | null

  constructor(value: T) {
    this.add(value)
  }

  add(value: T) {
    const newNode: LinkedListNode<T> = { next: null, prev: null, value }

    // Handles the special case where the linked list is currently empty.
    if (!this.head) {
      this.head = newNode

      return
    }

    // Finds the last node in the linked list.
    let currentNode = this.head
    while (currentNode.next) {
      currentNode = currentNode.next
    }

    newNode.prev = currentNode
    currentNode.next = newNode
  }

  remove(value: T): boolean {
    // If our list is empty, there's nothing to remove.
    if (!this.head) {
      return false
    }

    // Handles the special case where the node to remove is the head.
    if (this.head.value === value) {
      // Handles the case where the head is the only node in the list.
      if (!this.head.next) {
        this.head = null

        return true
      }

      const newHead = this.head.next
      newHead.prev = null
      this.head = newHead

      return true
    }

    // Finds the node right before the node to remove.
    let currentNode = this.head
    while (currentNode.next && currentNode.next.value !== value) {
      currentNode = currentNode.next
    }

    if (currentNode && currentNode.next) {
      // Updates the node before the one to remove to skip over the node we're removing.
      currentNode.next = currentNode.next.next
      if (currentNode.next) {
        currentNode.next.prev = currentNode
      }

      return true
    }

    return false
  }

  /**
   * Traverses the linked list via the "next" connections to generate a string representation
   * of the list.
   */
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

  /**
   * Traverses the linked list via the "prev" connections (from the back to the front) to generate
   * a string representation of the list.
   */
  printReverse(): string {
    let currentNode: LinkedListNode<T> | null = this.head
    if (!currentNode) {
      return ''
    }

    // Go to the end of the list.
    while (currentNode.next) {
      currentNode = currentNode.next
    }

    let repr = `${currentNode.value}`
    while (currentNode.prev) {
      currentNode = currentNode.prev
      repr = `${repr} => ${currentNode.value}`
    }

    return repr
  }
}
