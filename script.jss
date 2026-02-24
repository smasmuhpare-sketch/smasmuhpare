// Mengambil elemen display
const display = document.getElementById("display");

// Menambahkan angka atau operator ke layar
function appendValue(value) {
    display.value += value;
}

// Menghapus seluruh isi layar
function clearDisplay() {
    display.value = "";
}

// Menghapus satu karakter terakhir
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Menghitung hasil perhitungan
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
