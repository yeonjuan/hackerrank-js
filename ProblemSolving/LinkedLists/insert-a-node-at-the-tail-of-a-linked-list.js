// https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem
/* global SinglyLinkedListNode b:writable */
const insertNodeAtTail = (head, data) => {
  if (head === null) {
    head = new SinglyLinkedListNode(data);

    return head;
  }
  let cur = head;
  while (cur.next) {
    cur = cur.next;
  }
  cur.next = new SinglyLinkedListNode(data);

  return head;
};
