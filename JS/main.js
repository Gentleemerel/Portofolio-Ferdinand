// JavaScript portofolio Ferdinand Christopher A.
// Dipasang di ketiga halaman dengan defer

// 1. Daftar keahlian (halaman Beranda)
const skills = [
    {nama: "HTML", level: "Menengah"},
    {nama: "CSS", level: "Menengah"},
    {nama: "Git dan GitHub", level: "Dasar"},
    {nama: "Desain poster dengan Canva", level: "Mahir"},
];
skills.push ({nama: "JavaScript", level: "Dasar"});

const daftarskill = document.querySelector("#daftar-skill");
const jumlahskill = document.querySelector("#jumlah-skill");

if (daftarskill)  {
    skills.forEach((skill) => {
        const item = document.createElement("li");
        item.textContent = `${skill.nama} - (${skill.level})`;
        daftarskill.appendChild(item);
    });
    jumlahskill.textContent = `ada ${skills.length} keahlian yang sedang saya kembangkan`;
}

// 2. Tema gelap (semua halaman)
const tombolTema = document.querySelector("#tombol-tema");

if (tombolTema) {
    tombolTema.addEventListener("click", () => {
        document.body.classList.toggle("gelap");

        if (document.body.classList.contains("gelap")) {
            tombolTema.textContent = "Mode Terang";
        } else {
            tombolTema.textContent = "Mode Gelap";
        }
    });
}

// 3. Penghitung karakter pesan (halaman Kontak)
const kotakPesan = document.querySelector("#pesan");
const hitungKarakter = document.querySelector("#hitung-karakter");

if (kotakPesan) {
    kotakPesan.addEventListener("input", () => {
        const jumlahKarakter = kotakPesan.value.length;
        hitungKarakter.textContent = `${kotakPesan.value.length}/300 karakter`;
    });
}

// 4. Daftar proyek dan filter (halaman Proyek)
const proyek = [
  {
    judul: "Halaman Profil Pertama",
    kategori: "HTML",
    gambar: "img/Mainprof.png",
    alt: "Tangkapan layar halaman profil Ferdinand Christopher A.",
    deskripsi: "Halaman web pertama saya, dibuat dengan HTML dasar.",
  },
  {
    judul: "Form Kontak",
    kategori: "HTML",
    gambar: "img/proyek-kontak.png",
    alt: "Tangkapan layar form kontak berisi lima isian",
    deskripsi: "Form dengan label dan validasi bawaan browser.",
  },
  {
    judul: "Tabel Jadwal Belajar",
    kategori: "HTML",
    gambar: "img/proyek-jadwal.png",
    alt: "Tangkapan layar tabel jadwal belajar mandiri",
    deskripsi: "Jadwal belajar mingguan dengan thead dan tbody.",
  },
  {
    judul: "Portofolio Responsif",
    kategori: "CSS",
    gambar: "img/Portofolio resp.png",
    alt: "Tangkapan layar portofolio di ponsel dan laptop",
    deskripsi: "Rapi di ponsel, tablet, dan laptop dengan Flexbox.",
  },
   {
    judul: "Kalkulator Nilai Rapor",
    kategori: "JavaScript",
    gambar: "img/Latihan.png",
    alt: "Tangkapan layar hasil kalkulator nilai di Console",
    deskripsi: "Rata-rata dan predikat nilai dengan fungsi JavaScript.",
  },
  {
    judul: "Lima Soal Logika",
    kategori: "JavaScript",
    gambar: "img/Logika.png",
    alt: "Tangkapan layar hasil uji lima soal logika",
    deskripsi: "Lima fungsi logika yang masing-masing diuji 3 masukan.",
  },
];

const daftarProyek = document.querySelector("#daftar-proyek");
const jumlahProyek = document.querySelector("#jumlah-proyek");

function buatKartu(item) {
  return `
<article class="kartu">
<span class="label">${item.kategori}</span>
<h3>${item.judul}</h3>
<img src="${item.gambar}" alt="${item.alt}" width="280">
<p>${item.deskripsi}</p>
</article>`;
}

function tampilkanProyek(daftar) {
  if (!daftarProyek) return;
  const semuaKartu = daftar.map((item) => buatKartu(item));
  daftarProyek.innerHTML = semuaKartu.join("");
  if (jumlahProyek) {
    jumlahProyek.textContent = `Menampilkan ${daftar.length} dari ${proyek.length} proyek`;
  }
}

function pasangFilter(idTombol, kategori) {
  const tombol = document.querySelector(idTombol);
  if (!tombol) return;

  tombol.addEventListener("click", () => {
    const tombolLama = document.querySelector(".tombol-filter.aktif");
    if (tombolLama) {
      tombolLama.classList.remove("aktif");
    }
    tombol.classList.add("aktif");

    if (kategori === "Semua") {
      tampilkanProyek(proyek);
    } else {
      tampilkanProyek(proyek.filter((item) => item.kategori === kategori));
    }
  });
}

if (daftarProyek) {
  tampilkanProyek(proyek);
  pasangFilter("#filter-semua", "Semua");
  pasangFilter("#filter-HTML", "HTML");
  pasangFilter("#filter-CSS", "CSS");
  pasangFilter("#filter-JavaScript", "JavaScript");
}

// Animasi buka dan tutup menu
document.querySelectorAll(".menu-ponsel").forEach((menu) => {
    const summary = menu.querySelector("summary");

    summary.addEventListener("click", (event) => {
        event.preventDefault();

        if (menu.open) {
            // Tutup menu dengan animasi
            menu.classList.add("menutup");

            setTimeout(() => {
                menu.open = false;
                menu.classList.remove("menutup");
            }, 400);

        } else {
            // Buka menu dengan animasi
            menu.open = true;
            menu.classList.remove("menutup");
        }
    });
});