localStorage.setItem("usuario", "Claudio");

localStorage.setItem("nome", "maria ");
localStorage.setItem("id", "perdro");
localStorage.setItem("idade", "37");

const a = localStorage.getItem("nome");
const b = localStorage.getItem("id");
const c = localStorage.getItem("idade");
//console.log(nome_localStorage);
console.log(a);
console.log(b);
console.log(c);

document.getElementById("conteudo").innerHTML = "nome: " + c;
