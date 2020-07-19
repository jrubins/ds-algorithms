import { DoublyLinkedList } from '../doublyLinkedList'

test('adds nodes to the linked list', () => {
  const dbll = new DoublyLinkedList(4)
  expect(dbll.print()).toEqual('4')
  expect(dbll.printReverse()).toEqual('4')

  dbll.add(5)
  dbll.add(17)
  expect(dbll.print()).toEqual('4 => 5 => 17')
  expect(dbll.printReverse()).toEqual('17 => 5 => 4')
})

test('removes nodes from the linked list', () => {
  const dbll = new DoublyLinkedList(4)
  dbll.add(5)
  dbll.add(17)
  dbll.remove(5)
  expect(dbll.print()).toEqual('4 => 17')
  expect(dbll.printReverse()).toEqual('17 => 4')

  dbll.remove(4)
  expect(dbll.print()).toEqual('17')
  expect(dbll.printReverse()).toEqual('17')

  dbll.remove(17)
  expect(dbll.print()).toEqual('')
  expect(dbll.printReverse()).toEqual('')
})
