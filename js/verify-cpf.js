export default function IsCPF(field) {
    const cpf = field.value.replace(/\.|-/g,"");
    if(verifyRepitedNumber(cpf) || verifyFirstNumber(cpf) || verifySecondNumber(cpf)){
        field.setCustomValidity("Este CPF Não é Válido");
    }

}

function verifyRepitedNumber(cpf) {
    const repitedNumbers = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    return repitedNumbers.includes(cpf);
}

function verifyFirstNumber(cpf) {
    let sum = 0;
    let mult = 10;

    for (let lenght = 0; lenght < 9; lenght++) {
        sum += cpf[length] * mult;
        mult --;
    }

    sum = (sum * 10) % 11;

    if(sum == 10 || sum == 11){
        sum = 0;
    }
    console.log('primeiro',sum);
    return sum != cpf[9];
}

function verifySecondNumber(cpf) {
    let sum = 0;
    let mult = 11;

    for (let lenght = 0; lenght < 10; lenght++) {
        sum += cpf[length] * mult;
        mult --;
    }

    sum = (sum * 10) % 11;

    if(sum == 10 || sum == 11){
        sum = 0;
    }
    console.log('segundo',sum);
    return sum != cpf[10];
}