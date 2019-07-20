// https://www.hackerrank.com/challenges/delete-duplicate-value-nodes-from-a-sorted-linked-list/problem

const removeDuplicates = head => {
  let cur = head;
  while (cur.next !== null) {
    if (cur.data === cur.next.data) {
      const del = cur.next;
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return head;
};
