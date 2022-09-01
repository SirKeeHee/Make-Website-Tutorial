const nama = "kevin pranata";
let usia = 30;

let biodata = document.getElementById('biodata');

function generateBiodata() {
    let generasi;

    if(usia > 10 && usia <= 18) {
        // INI ADALAH KONDISI PERTAMA
        generasi = "generasi remaja";
    } else if(usia > 18 && usia < 30){
        generasi = "generasi dewasa"; 
    } else if (usia >= 30){
        generasi = "generasi terlalu dewasa";
    } else if(usia > 2 && usia < 10){
        generasi = "generasi anak anak";
    } else{
        // INI ADALAH JIKA KONDISI TIDAK TERPENUHI
        generasi = "generasi bayi";
    }
    return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(usia);

generateBiodata();