//menampilkan output bilangan prima setelah input bilangan tertentu!
let input = 13
let output = input + 1

for(let i=2; i<output; i++){
    if(output % i == 0){
        output++
    }
}

console.log(`Bilangan Prima setelah ${input} adalah ${output}`);


//menghitung jumlah bilangan prima pada rentang input awal sampai input akhir
let inputAwal = 1
let inputAkhir = 12
let jumlahPrima = 0

for (let i=inputAwal; i<=inputAkhir; i++) {
    if (i > 1){
        let j;

        for (j=2; j<i && i%j !== 0; j++) {
        }

        if (j === i) {
            jumlahPrima += i;
            console.log(i);
        }
    }
}
console.log(`Jumlah bilangan prima dari ${inputAwal} sampai ${inputAkhir} adalah ${jumlahPrima}`);