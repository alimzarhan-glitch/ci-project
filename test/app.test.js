const { tambah } = require('../src/app');

if (tambah(2, 3) === 5) {
	console.log("TEST BERHASIL");
} else {
	throw new Error("TEST GAGAl!");
}