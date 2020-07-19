import { LinkedList } from '../linkedList'

test('adds nodes to the linked list', () => {
  const ll = new LinkedList(4)
  expect(ll.print()).toEqual('4')

  ll.add(5)
  ll.add(17)
  expect(ll.print()).toEqual('4 => 5 => 17')
})

test('removes nodes from the linked list', () => {
  const ll = new LinkedList(4)
  ll.add(5)
  ll.add(17)
  ll.remove(5)
  expect(ll.print()).toEqual('4 => 17')

  ll.remove(4)
  expect(ll.print()).toEqual('17')

  ll.remove(17)
  expect(ll.print()).toEqual('')
})
