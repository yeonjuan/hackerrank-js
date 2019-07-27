/**
 * @title Delete duplicate-value nodes from a sorted linked list
 * @difficulty Easy
 * @link https://www.hackerrank.com/challenges/delete-duplicate-value-nodes-from-a-sorted-linked-list/problem
 */

const removeDuplicates = head => {
  let cur = head;
  while (cur.next !== null) {
    if (cur.data === cur.next.data) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return head;
};
