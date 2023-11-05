//Implementação If e Else If
let XP = 10500
let nome = "João das Neves"
let nivel = XP < 1000
let nivel2 = 1000 <= XP && XP < 2000
let nivel3 = 2000 <= XP && XP < 3000
let nivel4 = 3000 <= XP && XP < 4000
let nivel5 = 4000 <= XP && XP < 5000
let nivel6 = 5000 <= XP && XP < 6000
let nivel7 = 6000 <= XP && XP < 7000
let nivel8 = 7000 <= XP && XP < 8000
let nivel9 = 8000 <= XP && XP < 9000
let nivel10 = 9000 <= XP && XP < 10000
let nivel11 = XP >= 10000

if(nivel){
    titulo="Pedra"
}else if(nivel2){
    titulo="Ferro"
}else if(nivel3){
    titulo="Cobre"
}else if(nivel4){
    titulo="Bronze"
}else if(nivel5){
    titulo="Prata"
}else if(nivel6){
    titulo="Ouro"
}else if(nivel7){
    titulo="Platina"
}else if(nivel8){
    titulo="Diamante"
}else if(nivel9){
    titulo="Ascendente"
}else if(nivel10){
    titulo="Imortal"
}else if(nivel11){
    titulo="Radiante"
}

console.log("O heroi de nome "+nome+" está no nível "+titulo)
