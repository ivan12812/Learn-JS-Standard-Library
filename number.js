const input = "12345";
const number = Number(input); //mengkonversi ke number

console.log(typeof input); //Output string
console.log(typeof number); //Output number
console.log(number); //Output 12345 (cont infut)
console.log(Number("Salah")); //Output NaN karna "salah" = string bukan number

//Number Static properties
console.log(Number.MIN_VALUE); //untuk minimal nilai
console.log(Number.MAX_VALUE); //untuk maksimal nilai
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.NaN);

// Number Static Method
//const data = Number("12345");
const data = "12345";
console.log(Number.isInteger(data));
console.log(Number.isNaN(data));

//Number instance method
const value = Number(12345);
console.info(value.toString(2)); //mengubah ke binary number
console.info(value.toLocaleString("id-ID")); //mengubah format angka indonesia
