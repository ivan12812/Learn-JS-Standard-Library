{
  // loooping forEach
  const array = ["ivan", "Apriana", "A,md. Kom"];

  //function biasa
  array.forEach(function (value, index) {
    console.info(`${index} : ${value}`);
  });

  // arrow function
  array.forEach((value, index) => console.log(`${index} : ${value}`));

  // arrow function tanpa index
  array.forEach((value) => console.info(value));
}

{
  //Array Queue (FIFO)
  const queue = [];

  //push()=untuk menambah data
  queue.push("Eko");
  queue.push("Kurniawan");
  queue.push("Khannedy");

  //shift()=untuk mengambil dan menghapusanya dari paling depan.
  console.log(queue.shift());
  console.log(queue.shift());
  console.log(queue.shift());
  console.log(queue.shift()); //Undefined karna tidak ada lagi data di dalam antrian.
}

{
  //Array Stack (LIFO)
  const stack = [];

  stack.push("Eko");
  stack.push("Ju");
  stack.push("Khannedy");

  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
}
