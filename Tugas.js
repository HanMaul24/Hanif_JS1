// Menggunakan if else
var nilai = 75;

if (nilai >= 70) {
  console.log("Anda lulus.");
} else {
  console.log("Anda tidak lulus.");
  
  if (nilai >= 60) {
    console.log("Anda bisa mencoba remedial.");
  } else {
    console.log("Anda harus mengulang.");
  }
}

// Menggunakan switch case
var hari = "Selasa";

switch (hari) {
  case "Senin":
    console.log("Hari ini adalah hari kerja.");
    break;
  case "Selasa":
  case "Rabu":
  case "Kamis":
  case "Jumat":
    console.log("Hari ini juga hari kerja.");
    break;
  case "Sabtu":
  case "Minggu":
    console.log("Hari ini adalah hari libur.");
    break;
  default:
    console.log("Hari tidak valid.");
}

// Menggunakan for
for (var i = 1; i <= 5; i++) {
  console.log("Iterasi ke-" + i);
}

// Menggunakan while
var angka = 1;
while (angka <= 5) {
  console.log("Nilai angka: " + angka);
  angka++;
}

// Menggunakan do while
var counter = 1;
do {
  console.log("Counter ke-" + counter);
  counter++;
} while (counter <= 5);

// Menggunakan function
function tambahkan(a, b) {
  return a + b;
}

var hasilPenambahan = tambahkan(3, 5);
console.log("Hasil penambahan: " + hasilPenambahan);
