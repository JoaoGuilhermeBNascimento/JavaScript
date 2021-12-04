var agora = new Date()
var diaSem = agora.getDay()

console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('quinta')
        break
    case 5:
        console.log('Sexta-feiraaa')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('[ERRO] dia Inválido')
        break
}   