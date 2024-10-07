let cadastroUsuario = document.getElementById("cadastrarUser")
let cadastroSenha = document.getElementById("cadastrarSenha")
let cadastroEmail = document.getElementById("cadastrarEmail")

let usuarioLogin = document.getElementById("loginUser")
let senhaLogin = document.getElementById("loginSenha")

let saidaDiv = document.getElementById("divListar")

let listaUsuarios = []
let listaSenhas = []
let listaEmails = []

let pesquisarUsuario, posicaoUsuario
let listaDeDados = '', indiceUsuario = 1
let loginEfetuado = false

function Cadastrar(){

    //alert(`Função Cadastrar`)

    listaUsuarios.push(cadastroUsuario.value)
    
    listaSenhas.push(cadastroSenha.value)
    
    listaEmails.push(cadastroEmail.value)
    
    alert("Usuário cadastro com sucesso!")
    
    console.table(listaUsuarios)
    console.table(listaSenhas)
    console.table(listaEmails)

    LimpaCamposCadastro()

}

function Pesquisar(){

    //alert(`Função Pesquisar`)

    pesquisarUsuario = cadastroUsuario.value

    posicaoUsuario = listaUsuarios.indexOf(pesquisarUsuario)

    if (posicaoUsuario != - 1){

        alert('Usuário encontrado!')

        cadastroSenha.value = listaSenhas[posicaoUsuario]
        cadastroEmail.value = listaEmails[posicaoUsuario]

    }else{

        alert('Usuário NÃO existe!')

    }

}

function Editar(){

    //alert(`Função Editar`)

    if (cadastroUsuario.value != listaUsuarios[posicaoUsuario]){

        alert("Não é possível alterar o username!")

    }else{

        listaSenhas[posicaoUsuario] = cadastroSenha.value
        listaEmails[posicaoUsuario] = cadastroEmail.value

        alert("Dados editados com sucesso!")

        MostrarDadosConsole()

    }

}

function Excluir(){

    //alert(`Função Excluir`
    
    if (cadastroSenha.value == '' && cadastroEmail.value == ''){

        alert("Pesquise o usuário para puxar os dados, antes de excluir!")

    }else{

        listaUsuarios.splice(posicaoUsuario, 1)
        listaSenhas.splice(posicaoUsuario, 1)
        listaEmails.splice(posicaoUsuario, 1)

        alert("Usuário excluído com sucesso!")

        LimpaCamposCadastro()
        MostrarDadosConsole()
        
    }
    
}

function Listar(){

    //alert(`Função Listar`)

    listaDeDados = ''

    for (let i = 0; i < listaUsuarios.length; i++){

        listaDeDados += `Usuário ${indiceUsuario} ${listaUsuarios[i]} - ${listaSenhas[i]} - ${listaEmails[i]}` + '<br>'

        indiceUsuario++

    }

    alert(listaDeDados)

    saidaDiv.innerHTML = listaDeDados

}

function Logar(){

    //alert(`Função Logar`)

    for (let i = 0; i < listaUsuarios.length; i++){

        if (usuarioLogin.value == listaUsuarios[i] && senhaLogin.value == listaSenhas[i]){

            loginEfetuado = true

        }

    }

    if (loginEfetuado == true){

        alert("Login efetuado com sucesso!")
        window.location.href = 'paginaLogin.html' //muda da página de login para a conta do usuário

    }else{

        alert("Dados de login inválidas!")

    }

}

function LimpaCamposCadastro(){

    cadastroUsuario.value = ''
    cadastroSenha.value = ''
    cadastroEmail.value = ''

}

function MostrarDadosConsole(){

    console.table(listaUsuarios)
    console.table(listaSenhas)
    console.table(listaEmails)
    
}