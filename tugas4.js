//nama dan nilai siswa
let studentsScore = [
    {
        name : 'Andi',
        score : 90
    },
    {
        name : 'Rudi',
        score : 80
    },
    {
        name : 'Dira',
        score : 100
    }
]
let nama = ""
let nilaiTerbesar = 0

for(let i = 0; i < studentsScore.length; i++){
    if(studentsScore[i].score > nilaiTerbesar){
        nilaiTerbesar = studentsScore[i].score
        nama = studentsScore[i].name
    }
}

console.log(`Nilai tertinggi adalah ${nilaiTerbesar} yang diperoleh oleh ${nama}`);


//data event motorGP
let MotoGp = [
    {
        circuit : `Losail`,
        location : `Qatar`,
        winner : {
            name : `Andrea`,
            lastName : `Dovizioso`,
            country : `Italy`
        }
    },
    {
        circuit : `Autodromo`,
        location : `Argentine`,
        winner : {
            name : `Cal`,
            lastName : `Crutchlow`,
            country : `UK`
        }
    },
    {
        circuit : `De Jerez`,
        location : `Spain`,
        winner : {
            name : `Valentino`,
            lastName : `Rossi`,
            country : `Italy`
        }
    },
    {
        circuit : `Mugello`,
        location : `Italy`,
        winner : {
            name : `Andrea`,
            lastName : `Dovizioso`,
            country : `Italy`
        }
    }

];
let hasil = {};

for (let i = 0; i < MotoGp.length; i++) {
  let negara = MotoGp[i].winner.country;
  let namaLengkap = (`${MotoGp[i].winner.name} ${MotoGp[i].winner.lastName}`);
  let lokasiMenang = (`${MotoGp[i].circuit}, ${MotoGp[i].location}`);

  if  (!hasil[negara]){
    hasil[negara] = {
        winningCircuit : [],
        totalWin : 0
    };
  }

    hasil[negara].winningCircuit.push({
        name : namaLengkap,
        winLocation : lokasiMenang
    });

    hasil[negara].totalWin++;
}

console.log(JSON.stringify(hasil, null, 2));