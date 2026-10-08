// 1. Memilih elemen
const judul = document.getElementById("judul");
const sapaan = document.getElementById("sapaan");
 
// 2. Melihat elemen di Console
console.log(judul);
console.log(sapaan);
 
// 3. Mengubah isi teks
judul.textContent = "Judul Sudah Diubah!";
 
// 4. Mengubah warna
judul.style.color = "crimson";
 
// 5. Mengubah isi dengan tag HTML
sapaan.innerHTML = "Halo, saya sedang <b>belajar DOM</b>!";
 
// 6. Mencoba id yang tidak ada (Diberi validasi agar tidak error)
const hantu = document.getElementById("tidakada");
console.log(hantu); // Ini akan memunculkan nilai 'null' di console

if (hantu) {
  hantu.textContent = "Halo";
}


// ==========================================
// 🔥 JAWABAN TANTANGAN MANDIRI 2
// ==========================================

// Langkah 2: Mengambil elemen <p id="kelas"> dan mengubah isinya
const kelasElemen = document.getElementById("kelas");
kelasElemen.textContent = "X RPL 5"; // <-- SILAKAN GANTI dengan kelasmu yang sebenarnya!

// Langkah 3: Mengubah ukuran huruf menjadi 30px
kelasElemen.style.fontSize = "30px";

