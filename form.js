const cadForm = document.getElementById("cadUsuario");

//salvar os dados do formulario no localStorage
cadForm.addEventListener("submit", async (e) => {
  e.preventDefault(); //nao carregar a pagina

  //receber dados do formulario
  let nome_usuario = document.getElementById("nome_usuario").value;
  let email_usuario = document.getElementById("email_usuario").value;
  //console.log(nome_usuario);
  //console.log(email_usuario);

  //salvar dados no localSortage
  localStorage.setItem(
    "usuario",
    JSON.stringify({ nome_usuario, email_usuario })
  );

  //recupear valores do localStorage

  let usuario_localStorage = localStorage.getItem("usuario");
  console.log(usuario_localStorage);

  //converter a string em objeto

  let dados_usuarios = JSON.parse(usuario_localStorage);
  //console.log(dados_usuarios);

  document.getElementById("conteudo").innerHTML =
    "<br>Nome:" +
    dados_usuarios.nome_usuario +
    "<br>Email:" +
    dados_usuarios.email_usuario +
    "<br>";
});
