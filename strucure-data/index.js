
// Linked list

// [value, next] -> [value, next] -> [value, next]
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
};


class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const node = new Node(data);

    if (this.tail) { // If not first elem
      this.tail.next = node
    }

    if (!this.head) { // If first elem
      this.head = node
    }

    this.tail = node;
  };

  prepend(data) {
    const node = new Node(data, this.head);

    this.head = node;

    if (!this.tail) { // If first elem
      this.tail = node
    }
  };

  find(data) {
    if (!this.head) return
    
    let current = this.head;

    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
  };


  insertAfter(after, data) {
    const found = this.find(after);

    if (!found) return;

    const node = new Node(data, found.next);
    found.next = node;  // new Node(data, found.next)
  };

  remove(data) {
    if (!this.head) return;

    while (this.head && this.head.data === data) {
      this.head = this.head.next;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
      }
      else {
        current = current.next
      }
    } 

    if (this.tail.data === data) {
      this.tail = current
    }
  }

  toArray() {
    const output = [];
    let current = this.head;

    while (current) {
      output.push(current);
      current = current.next
    }

    return output
  }
};


const list = new LinkedList();
list.append(`Hi`);
list.append(`my`);
list.append(`dear`);
list.prepend(`Slava`);
// list.append(`dear100`);
list.append(`10500`);
list.append(`100500`);
list.append(`description`);
list.append(`undefined elem`);
list.append(`car`);
list.prepend(`falseItem`);
list.prepend(`falseItem`);
list.prepend(`falseItem`);
list.append(`falseItem`);


list.insertAfter(`100500`, `newElement`);
list.remove(`falseItem`);
console.log('listArray: ', list.toArray());
