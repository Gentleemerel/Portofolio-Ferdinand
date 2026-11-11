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

// 2. MENAMPILKAN DAFTAR MENU
console.log(`
🍛 DAFTAR MAKANAN
1. Nasi Goreng : Rp12.000
2. Ayam Geprek : Rp15.000
3. Bakso       : Rp10.000
4. Mie Goreng  : Rp10.000

🥤 DAFTAR MINUMAN
1. Es Teh      : Rp4.000
2. Es Jeruk    : Rp5.000
3. Es Cokelat  : Rp6.000
4. Air Mineral : Rp3.000
`);


// 3. FUNGSI HITUNG TOTAL
// Sesuai soal modul
function hitungTotal(jumlahNasi, jumlahEs) {
    return (jumlahNasi * hargaNasi) +
           (jumlahEs * hargaEs);
}

// Fungsi tambahan untuk menghitung semua menu
function hitungTotalMenu(pesanan) {

    let total = hitungTotal(
        pesanan.nasiGoreng || 0,
        pesanan.esTeh || 0
    );

    for (const menu in pesanan) {

        if (menu !== "nasiGoreng" && menu !== "esTeh") {
            total += pesanan[menu] * daftarHarga[menu];
        }

    }

    return total;
}


// 4. ARROW FUNCTION HITUNG KEMBALIAN
// Sesuai soal modul
const hitungKembalian = (bayar, total) => {
    return bayar - total;
};

// 5. FUNGSI CEK PEMBAYARAN
// Menggunakan if, else if, dan else
function cekPembayaran(bayar, total) {

    if (bayar < total) {

        return `Uang kurang Rp${Math.abs(
            hitungKembalian(bayar, total)
        ).toLocaleString("id-ID")}`;

    } else if (bayar === total) {

        return "Uang pas";

    } else {

        return `Kembalian Rp${hitungKembalian(
            bayar, total
        ).toLocaleString("id-ID")}`;

    }

}


// 6. FUNGSI CETAK STRUK
function cetakStruk(nama, pesanan, bayar) {

    const total = hitungTotalMenu(pesanan);

    console.log(`
========== STRUK KASIR ==========
🏫 KANTIN SMKN 1 Pasuruan
👤 Pembeli: ${nama}

DAFTAR PESANAN:
`);

    for (const menu in pesanan) {

        const jumlah = pesanan[menu];

        if (jumlah > 0) {

            const subtotal = jumlah * daftarHarga[menu];

            console.log(
                `${namaMenu[menu]} x${jumlah} = Rp${subtotal.toLocaleString("id-ID")}`
            );

        }

    }

    console.log(`
---------------------------------
💰 Total       : Rp${total.toLocaleString("id-ID")}
💵 Uang Bayar  : Rp${bayar.toLocaleString("id-ID")}
📢 ${cekPembayaran(bayar, total)}
=================================
    `);

}


// 7. CONTOH TRANSAKSI TIGA PEMBELI


// PEMBELI 1: UANG KURANG

const pesanan1 = {
    ayamGeprek: 1,
    airMineral: 1
};

cetakStruk("Pembeli 1", pesanan1, 15000);

// PEMBELI 2: UANG PAS
const pesanan2 = {
    bakso: 1,
    esTeh: 1
};

cetakStruk("Pembeli 2", pesanan2, 14000);


// PEMBELI 3: UANG BERLEBIH
const pesanan3 = {
    nasiGoreng: 1,
    esCokelat: 1
};

cetakStruk("Pembeli 3", pesanan3, 30000);