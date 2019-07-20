// https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/problem

const printLinkedList = head => {
  let headPointer = head;
  while (headPointer) {
    console.log(headPointer.data);
    headPointer = headPointer.next;
  }
};
