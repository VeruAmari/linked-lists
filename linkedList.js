const linkedList = () => {
  // Keep track of head and tail of list
  let head = null;
  let tail = null;

  // List item data structure
  const node = () => {
    // Node data structure
    let value = null;
    let nextNode = null;
    return { value, nextNode };
  };

  // Methods
  const append = (value) => {
    // Creates a new node of value value and sets it as tail
    console.log(`Attaching new item of value ${value} to end of the list.`);
    const newNode = node();
    newNode.value = value;

    if (!head) {
      head = newNode;
    }
    if (!tail) {
      tail = newNode;
    } else {
      tail.nextNode = newNode;
      tail = newNode;
    }
  };
  const prepend = (value) => {
    // Creates a new node of value value and sets it as head
    console.log(
      `Attaching new item of value ${value} to beginning of the list.`,
    );
    const newNode = node();
    newNode.value = value;

    if (!head) {
      head = newNode;
    }
    if (!tail) {
      tail = newNode;
    } else {
      newNode.nextNode = head;
      head = newNode;
    }
  };
  const headNode = () => {
    // Returns first item in the list
    console.log("Returning first item in list.");
    return head;
  };
  const tailNode = () => {
    // Returns last item in the list
    console.log("Returning last item in list.");
    return tail;
  };
  const size = () => {
    // Returns list item count
    console.log("Returning size of list.");
    let cursor = head;
    let nodes = 0;
    while (cursor) {
      nodes += 1;
      cursor = cursor.nextNode;
    }
    return nodes;
  };
  const at = (index) => {
    console.log("Returning list element at index ", index);
    let cursor = head;
    for (i = 0; i < index; i++) {
      cursor = cursor.nextNode;
    }
    return cursor;
  };
  const pop = () => {
    console.log("Removing last element in list.");
    let cursor = head;
    while (cursor.nextNode.nextNode) {
      cursor = cursor.nextNode;
    }
    cursor.nextNode = null;
    tail = cursor;
  };
  const contains = (value) => {
    console.log(`Searching for ${value} in list.`);
    let cursor = head;
    while (cursor.nextNode) {
      if (cursor.value === value) {
        console.log(`${value} found in list.`);
        return true;
      }
      console.log(`${value} not found in list.`);
      return false;
    }
  };
  return { append, prepend, headNode, tailNode, size, at, pop, contains };
};

const array = [1, 2, 3, 4, "cat"];
const list = linkedList();
array.forEach((element) => {
  list.append(element);
});
list.append(123);
list.prepend("abc");
console.log(list.headNode());
console.log(list.size());
console.log(list.tailNode());
list.pop();
console.log(list.tailNode());
console.log(list.size());
