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

{
  //Array Search
  const source = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

  //mencari value lebih dari 3
  console.log(source.find((value) => value > 3)); //outfut 4

  //mencari value index lebih dari 3
  console.log(source.findIndex((value) => value > 3)); //output 3

  //mencari data yang di include
  console.log(source.includes(7)); //output false

  //mencari index dalam nilai indexOf
  console.log(source.indexOf(5)); //output 4

  //mencari index terakhir dalam nilai indexof
  console.log(source.lastIndexOf(5)); //output 9
}

{
  //Aray Filter
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  //Mencari data aray ganjil sisa bagi 1
  console.log(number.filter((value) => value % 2 === 1));

  //Mencari data array gnap sisa bagi 0
  console.log(number.filter((value) => value % 2 === 0));
}

{
  //Array Transformasi
  const names = "Ivan Apriana".split(" ");
  //Mengubah tiap data di dalam array jadi hurup besar
  console.log(names.map((value) => value.toUpperCase()));

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //Melakukan perhitungan satu per satu dan mentotalkan
  console.log(numbers.reduce((result, value) => result + value));
  console.log(numbers.reduceRight((result, value) => result + value));
}
