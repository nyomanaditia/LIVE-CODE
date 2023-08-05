/*
Count solo
===========
Diberikan sebuah function countSolo, dimana function ini akan menerima parameter sebagai array
dan akan mereturn total jumlah dari angka angka yang TIDAK memiliki pasangan.
Example:
input: [ 5, 5, 6, 6, 3, 1, 2, 7, 7 ]
proses: 3 + 1 + 2
result: 6
RULES:
 - TIDAK BOLEH MENGGUNAKAN built in function .map, .filter, .reduce!
 - TIDAK BOLEH MENGGUNAKAN built in function .indexOf dan .include!
*/

function countSolo(numbers) {
  let sort = numbers.sort((a,b) => a - b);
  
  let result = [];
  let item = [];
  for(let i = 0; i < sort.length; i++) {
    item.push(numbers[i]);

    if(numbers[i + 1] !== numbers[i]) {
      result.push(item);
      item = [];
    }
  }
  
  let total = 0;
  for(let i = 0; i < result.length; i++) {
    if(result[i].length < 2) {
      total += result[i][0];
    }
  }
  return total;
}

console.log(countSolo([5, 5, 6, 6, 3, 1, 2, 7, 7])); // 6
console.log(countSolo([3, 6, 3, 6, 1, 1, 2, 1])); // 2
console.log(countSolo([3, 3, 3, 3, 4, 5, 8, 10, 11])); // 38
