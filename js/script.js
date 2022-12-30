import IsCPF from "./verify-cpf.js";
const formField = document.querySelectorAll('[required]');

formField.forEach(field => {
    field.addEventListener('blur', () => VerifyField(field))
});

function VerifyField(field) {
    if(field.name == "cpf" && field.value.length >= 11){
        IsCPF(field);
    }
}