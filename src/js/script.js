const email ="    email@empresa.com   "
const emaillimpo= email.trim();//remove espaços
console.log(emaillimpo)
//verificase o dominio e valido
if (emaillimpo.includes("@")){
    console.log("email valido")
}else{
    console.log("email invalido")
}
//
const titulolivre ="Como aprender a programar"

const texto=titulolivre
.toLowerCase()
.split(" ")
.join("-")



console.log(texto)
