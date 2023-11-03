//Implementação Switch não funcional
let XP = 500
let nome = "João das Neves"
let titulo = "Madeira"

switch(XP){
    case XP < 1000:
    titulo="Pedra"
    break
    case 1000 <= XP:
    case XP < 2000:
    titulo="Ferro"
    break
    case 2000 <= XP:
    case XP < 3000:
    titulo="Cobre"
    break
    case 3000 <= XP:
    case XP < 4000:
    titulo="Bronze"
    break
    case 4000 <= XP:
    case XP < 5000:
    titulo="Prata"
    break
    case 5000 <= XP:
    case XP < 6000:
    titulo="Ouro"
    break
    case 6000 <= XP:
    case XP < 7000:
    titulo="Platina"
    break
    case 7000 <= XP:
    case XP < 8000:
    titulo="Diamante"
    break
    case 8000 <= XP:
    case XP < 9000:
    titulo="Ascendente"
    break
    case 9000 <= XP:
    case XP < 10000:
    titulo="Imortal"
    break
    case XP >= 10000:
    titulo="Radiante"
}

console.log("O heroi de nome "+nome+" está no nível "+titulo)
 
