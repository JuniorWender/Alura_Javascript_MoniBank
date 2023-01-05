export default function legalAge(field){
    const bornDate = new Date(field.value);
    verifyAge(bornDate);
}

function verifyAge(date) {
    const actualDate = new Date();
    const legalAgeDate = new Date(date.getUTCFullYear() + 18, date.getUTCMonth(), date.getUTCDate());

    return actualDate >= legalAgeDate;
}