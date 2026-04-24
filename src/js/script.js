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

// to fixed

const preçoproduto = 199.99;
const desconto = 0.15; //15%
const preçofinal =preçoproduto*(1/desconto);
console.log(preçofinal)
console.log(`r$ ${preçofinal.toFixed(2)}`);
//metodo de array
const produtos=[
    {nome:"teclado mecanico", preço:200,promoçao:true},
    {nome:"mouse gamer", preço:500,promoçao:false},
    {nome:"fone gay", preço:1000,promoçao:true},
    {nome:"mousepad", preço:100,promoçao:false},
]
console.log(produtos)