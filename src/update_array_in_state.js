/*
every time you want to update an array, you’ll want to pass a new array to your state setting function
*/
const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

//改变数组中的某一个元素
let changedList = initialList.map((element) => {
  if (element.id === 2) {
    return { ...element, seen: false };
  } else {
    return element;
  }
});
console.table(changedList);

//增加数组元素
let addedList = [...initialList, { id: 3, title: "xia", seen: true }];
console.table(addedList);

//remove
// let removedList = initialList.filter((element) => element.id !== 2);
let removedList = initialList.filter((e) => {
  return e.id !== 0;
});
console.table(removedList);

//insert
let insertedList = [
  ...initialList.slice(0, 1),
  { id: 4, title: "xia", seen: false },
  ...initialList.slice(1),
];
console.table(insertedList);

// 一个原则 dont mutate obeject in array 每次修改数组中的元素都使用copy 再修改copy 重新赋值回对应的index  (使用map)
