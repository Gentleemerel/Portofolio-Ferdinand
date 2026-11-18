// 1. Total harga
const hargaNasi = 12000;
const hargaEsTeh = 4000;

function hitungTotal(jumlahNasi, jumlahEsTeh) {
    return (jumlahNasi * hargaNasi) + (jumlahEsTeh * hargaEsTeh);
}

console.log("Soal Praktik Kasir Kantin");
console.log("Hitung Total Harga");
console.log(hitungTotal(4, 6));

// 2. Hitung kembalian
function hitungKembalian(totalHarga, uangBayar) {
    if (uangBayar < totalHarga) { // uang bayar kurang
        return `Uang bayar kurang Rp ${totalHarga - uangBayar} dari total Rp ${totalHarga}`;
    } else if (uangBayar === totalHarga) { // uang bayar pas
        return `Uang bayar pas (${totalHarga - uangBayar} kembalian) dari total Rp ${uangBayar}`; 
    } else { // uang bayar lebih
        return `Uang lebih, kembali Rp ${uangBayar - totalHarga} dari total Rp ${totalHarga}`;
    }
}

console.log("Hitung kembalian");
console.log(hitungKembalian(20000, 20000)); // uang pas
console.log(hitungKembalian(32000, 40000)); // uang lebih
console.log(hitungKembalian(52000,50000)); // uang kurang


// Tampilan Menu Dengan Cara JSON 
let menu = [];

const daftarMenu = document.querySelector("#daftar-menu");
const jumlahMenu = document.querySelector("#jumlah-menu");

async function muatMenu() {
    if (jumlahMenu) {
        jumlahMenu.textContent = "Memuat menu...";
    }

    try {
        const response = await fetch("../data/menu.json");

        if (!response.ok) {
            throw new Error("Data menu gagal dimuat");
        }

        menu = await response.json();

        tampilkanMenu(menu);

    } catch (error) {
        console.error("Error:", error);

        if (jumlahMenu) {
            jumlahMenu.textContent = "Data Menu gagal dimuat.";
        }
    }
}

function buatKartu(item) {
  return `
<article class="kartu">
<span class="label">${item.kategori}</span>
<h3>${item.nama}</h3>
<h3>${item.harga}</h3>
<p>${item.deskripsi}</p>
</article>`;
}

function tampilkanMenu(daftar) {
  if (!daftarMenu) return;
  const semuaKartu = daftar.map((item) => buatKartu(item));
  daftarMenu.innerHTML = semuaKartu.join("");
  if (jumlahMenu) {
    jumlahMenu.textContent = `Menampilkan ${daftar.length} daftar dari total ${menu.length} menu`;
  }
}

function pasangFilter(idTombol, kategori) {
  const tombol = document.querySelector(idTombol);
  tombol.addEventListener("click", () => {
    document.querySelectorAll(".tombol-filter").forEach((item) => {
      item.classList.remove("aktif");
    });
    tombol.classList.add("aktif");

    if (kategori === "Semua") {
      tampilkanMenu(menu);
    } else {
      tampilkanMenu(menu.filter((item) => item.kategori === kategori));
    }
  });
}


if (daftarMenu) {
  muatMenu();
  pasangFilter("#filter-semua", "Semua");
  pasangFilter("#filter-makanan", "Makanan");
  pasangFilter("#filter-minuman", "Minuman");
}

// Tema gelap terang
const tombolTema = document.querySelector("#tombol-tema");

if (tombolTema) {
  tombolTema.addEventListener("click", () => {
    document.body.classList.toggle("gelap");

    if (document.body.classList.contains("gelap")) {
      tombolTema.textContent = "Mode Terang☀️";
    } else {
      tombolTema.textContent = "Mode Gelap🌙";
    }
  });
}