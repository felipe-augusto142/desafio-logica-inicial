//Implementação Switch (com a ajuda do ChatGPT)
let XP = 500
let nome = "João das Neves"
let titulo

switch(true){
    case XP < 1000:
    titulo="Pedra"
    break
    case XP < 2000:
    titulo="Ferro"
    case XP < 3000:
    titulo="Cobre"
    break
    case XP < 4000:
    titulo="Bronze"
    break
    case XP < 5000:
    titulo="Prata"
    break
    case XP < 6000:
    titulo="Ouro"
    break
    case XP < 7000:
    titulo="Platina"
    break
    case XP < 8000:
    titulo="Diamante"
    break
    case XP < 9000:
    titulo="Ascendente"
    break
    case XP < 10000:
    titulo="Imortal"
    break
    case XP >= 10000:
    titulo="Radiante"
}

console.log("O heroi de nome "+nome+" está no nível "+titulo)
 
