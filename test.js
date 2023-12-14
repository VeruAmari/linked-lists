import linkedList from "./linkedList.js";

const array = [1, 2, 3, 4, "cat"];
const list = linkedList();

array.forEach((element) => {
  list.append(element);
});
list.append(123);
list.prepend("abc");

console.log(list.toString());
console.log(list.headNode());

list.insertAt("test", 99);
console.log(list.toString());
list.removeAt(2);
