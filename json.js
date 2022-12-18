const person = {
  firstName: "Eko",
  lastname: "Khannedy",
  address: {
    country: "Indonesia",
    city: "Karawang",
  },
};

const json = JSON.stringify(person); //ini merubah data object menjadi json string
const personAgain = JSON.parse(json); //ini merubah data json stirng menjadi javascript object

console.log(json);
console.log(personAgain);
