https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem

const insertNodeAtPosition = (head, data, position) => {
    const newNode = new SinglyLinkedListNode(data);
    if (position === 0) {
        newNode.next = head;
        head = newNode;

        return head;
    }

    let pre = head;
    let cur = pre.next;
    let index = 1;
    while (index !== position) {
        pre = cur;
        cur = cur.next;
        index++;
    }
    newNode.next = pre.next;
    pre.next = newNode;

    return head;
};