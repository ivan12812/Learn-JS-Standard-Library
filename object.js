{
  const person = {
    firstName: "Eko",
    lastName: "Khannedy",
  };

  Object.freeze(person);

  person.firstName = "Diubah"; //tidak berubah
  delete person.firstName; //tidak berubah

  console.info(person);
}

{
  const target = { firstName: "Eko" };
  const source = { lastName: "Khannedy" };

  Object.assign(target, source); //source dipindahkan ke dalam target.
  console.log(target);
  console.log(source);
}

{
  const person = {
    firstName: "Eko",
    lastName: "Khaneddy",
  };

  console.log(Object.values(person)); //untuk mendapatkan semua value dan berbentuk array
  console.log(Object.getOwnPropertyNames(person)); //untuk mendapatkan semua property
}
