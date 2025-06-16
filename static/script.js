let conta = []

const adicionarNumero = (index) => {

    // exibindo números adicionados na calculadora
    document.querySelector('#resultado-div').innerHTML += index

    // adicionando número no array "conta"
    conta.push(index)
}

const adicionarOperacao = (index) => {

    if (index == "%") {

    } else {

    }
}

const limparConta = () => {
    // limpando array "conta" e exibição dos números na calculadora
    document.querySelector('#resultado-div').innerHTML = ""
    document.querySelector('#sub-resultado-div').innerHTML = ""
    conta = []
}

const apagarDigito = () => {

    if (conta.length == 0) {

        // log caso tente apagar sem dígito
        console.log('Digite um número')
        document.querySelector('#resultado-div').innerHTML = ""
    } else {

        // removendo ultimo digito do array "conta"
        conta.pop()

        // juntando todos os valores do array "conta"
        juntarConta = conta.join('')


        // condição caso ele apague o ultimo dígito sobrando (para não exibir NaN)
        if (conta.length == 0) {

            // log caso tente apagar sem dígito
            console.log('Digite um número')
            document.querySelector('#resultado-div').innerHTML = ""
        } else {

            // transformando o array "conta" em número inteiro e exibindo o número na calculadora
            document.querySelector('#resultado-div').innerHTML = parseInt(juntarConta)
        }

    }
}

const atualizarConta = () => {

}

const inverterSinal = () => {

}

// Colocando eventos nos números
document.querySelector("#zero").addEventListener("click", () => adicionarNumero(0));
document.querySelector("#um").addEventListener("click", () => adicionarNumero(1));
document.querySelector("#dois").addEventListener("click", () => adicionarNumero(2));
document.querySelector("#tres").addEventListener("click", () => adicionarNumero(3));
document.querySelector("#quatro").addEventListener("click", () => adicionarNumero(4));
document.querySelector("#cinco").addEventListener("click", () => adicionarNumero(5));
document.querySelector("#seis").addEventListener("click", () => adicionarNumero(6));
document.querySelector("#sete").addEventListener("click", () => adicionarNumero(7));
document.querySelector("#oito").addEventListener("click", () => adicionarNumero(8));
document.querySelector("#nove").addEventListener("click", () => adicionarNumero(9));

// Colocando eventos nas operações
document.querySelector('#multiplicar').addEventListener("click", () => adicionarOperacao("*"))
document.querySelector('#dividir').addEventListener("click", () => adicionarOperacao("/"))
document.querySelector('#somar').addEventListener("click", () => adicionarOperacao("+"))
document.querySelector('#subtrair').addEventListener("click", () => adicionarOperacao("-"))
document.querySelector('#porcentagem').addEventListener("click", () => adicionarOperacao("%"))

// Colocando evento para limpar
document.querySelector('#limpar').addEventListener("click", () => limparConta())

// Colocando evento para apagar ultimo dígito
document.querySelector('#apagarDigito').addEventListener('click', () => apagarDigito())