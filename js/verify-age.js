export default function legalAge(field){
    const bornDate = new Date(field.value);
    if(!verifyAge(bornDate)){
        field.setCustomValidity('Usuário não é maior de idade');
    }
}

function verifyAge(date) {
    const actualDate = new Date();
    const legalAgeDate = new Date(date.getUTCFullYear() + 18, date.getUTCMonth(), date.getUTCDate());

    return actualDate >= legalAgeDate;
}