class Node {
    constructor(value, next_node = null) {
      this.value = value;
      this.next_node = next_node;
    }
  }
   class LinkedList {
    // setup head and tail
    head;
  
    add(number) {
      // your code here
      const list = new LinkedList();
  
  list.add(3);
  list.add(5);
  
    }
  
    get(index) {
      // your code here
   console.log(   list.get(1));
    }
  }
  
  const list = new LinkedList();
  
  list.add(3);
  list.add(5);
  console.log(list.get(1));
  // => 5
  
  module.exports = LinkedList;
    