class DLLNode {
  constructor({ element = undefined, next = this, prev = this, isSentinel = false }) {
    this.element = element;
    this.next = next;
    this.prev = prev;
    this._active = !isSentinel;
  }
//this method can be used to remove node in DLL
  remove() {
    if (this._active) {
      this.prev.next = this.next;
      this.next.prev = this.prev;
      this._active = false;
      return this.element;
    }
  }
}

class DoublyLinkedList {
  constructor(Node = DLLNode) {
    this.Node = Node;
    this._sentinel = new this.Node({ isSentinel: true });
  }

  _head() {
    return this._sentinel.next;
  }

  _tail() {
    return this._sentinel.prev;
  }

  insertHead(element) {
    // create a new node
    // set it to head
    // previous will be sentinel
    // sentinel's next is new node
    let new_head = new this.Node({element, next: this._head, prev: this._sentinel});
    this._head.next = new_head
    this._sentinel.next = new_head;
    return new_head;
  }

  insertTail(element) {
    // create new node
    // previous is tail
    // former tail's next is now new tail
    // sentinel's previous is new tail
    // set new node to tail
    let new_tail = new this.Node({element, next: this._sentinel, prev: this._tail});
    this._tail.next = new_tail;
    this._sentinel.prev = new_tail;
    return new_tail;
  }

  removeHead() {
    //use Node class' remove
    return this._head.remove();
  }

  removeTail() {
    //use Node class' remove
    return this._tail.remove();
  }

  remove(node) {
    return this.node.remove();
  }

  forEach(callback) {
    // this is for applying a function/method to all elements
    // start with head node
    // until the node.next is the sentinel
    // do callback
    // go to next node
    let current_node = this._head;
    while (current_node._active ) {
      callback(current_node, this);
      current_node = current_node.next;
    }
  }

  count() {
    // iterate through each node
    // if there is no head, return 0
    // counter increases by 1
    // return count
    if (!this._head) return 0;
    let counter = 0
    let current_node = this._head
    while (current_node._active) {
      counter ++
    }
    return counter
  }
}

export default DoublyLinkedList;