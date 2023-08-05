/*
  //////////////////////
  pyramidNumberExtension
  //////////////////////

  Function pyramidNumberExtension adalah suatu fungsi kelanjutan dari pyramidNumber yang sudah dibuat.
  Function ini akan menerima parameter max yang bertipe data number, serta hanya berfungsi untuk menampilkan
  saja.
  
  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var max = 5

  [OUTPUT]
    55555
    4444
    333
    22
    1
    22
    333
    4444
    55555

  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var max = 1
  [OUTPUT]
    1

    22
    1
    22

  [RULES]
    1. Dilarang menggunakan built in function apapun.
    2. Asumsi nilai minimum max adalah 1.
*/
var max = 1; //input bisa berubah ubah
//code here tanpa fungsi, lgsg console.log aja
for(let i = max; i >= 2; i--) {
  let result = '';

  for(let j = i + 1; j >= 2; j--) {
    result += i;
  }
  console.log(result);
}

console.log('1');

for (let i = 2; i <= max; i++) {
  let bintangAsteriks = "";
  for (let j = 2; j <= i + 1; j++) {
    bintangAsteriks += i;
  }
  console.log(bintangAsteriks);
}

 /* [OUTPUT];
  55555
  4444
  333
  22
  1
  22
  333
  4444
  55555
*/
