let conta = []
let exibirConta = []
let previaConta = []
let exibirPreviaConta = []
let resultado = "a"

const adicionarNumero = (index) => {
    exibirConta.push(index)

    // exibindo números adicionados na calculadora
    document.querySelector('#resultado-div').innerHTML = exibirConta.join('')

    // adicionando número no array "conta"
    conta.push(index)

    previaConta.push(index)



}

const adicionarOperacao = (index) => {

    // transformando PreviaConta em um array
    exibirPreviaConta = previaConta.join('')
    previaConta = exibirPreviaConta.split('')


    // condição caso ja tenha operação (para não ter duas operações, ex: 8xx, 8++)
    if (previaConta[previaConta.length - 1] == "x" || previaConta[previaConta.length - 1] == "%" || previaConta[previaConta.length - 1] == "+" || previaConta[previaConta.length - 1] == "-" || previaConta[previaConta.length - 1] == "÷" || previaConta == "") {

        // caso de certo
    } else {
        console.log('foi')

        exibirConta = exibirConta.join('')


        if (index == "%") {

            previaConta.push('%')

            document.querySelector('#sub-resultado-div').innerHTML = previaConta.join('')

        } else if (index == "*") {
            

            document.querySelector('#sub-resultado-div').innerHTML = atualizarConta(resultado, parseInt(exibirConta), index) + "x"

        } else if (index == "+") {

            document.querySelector('#sub-resultado-div').innerHTML = atualizarConta(resultado, parseInt(exibirConta), index) + "+"

        } else if (index == "-") {

            document.querySelector('#sub-resultado-div').innerHTML = atualizarConta(resultado, parseInt(exibirConta), index) + "-"

        } else if (index == "/") {

            document.querySelector('#sub-resultado-div').innerHTML = atualizarConta(resultado, parseInt(exibirConta), index) + "÷"
        }

        resultado = parseInt(exibirConta)

        // limpando array "exibirConta"
        exibirConta = []
    }

}

const limparConta = () => {
    // limpando arrays "conta" e "exibirConta", e exibição dos números na calculadora
    document.querySelector('#resultado-div').innerHTML = ""
    document.querySelector('#sub-resultado-div').innerHTML = ""
    conta = []
    exibirConta = []
    previaConta = []
    exibirPreviaConta = []
    resultado = "a"

}

const apagarDigito = () => {

    // condição caso tente apagar sem dígito
    if (conta.length == 0) {

        // log caso tente apagar sem dígito
        document.querySelector('#resultado-div').innerHTML = ""

    } else {

        // removendo ultimo digito do array "conta"
        conta.pop()
        exibirConta.pop()
        previaConta.pop()


        // condição caso ele apague o ultimo dígito sobrando (para não exibir NaN)
        if (conta.length == 0) {

            // log caso tente apagar sem dígito
            document.querySelector('#resultado-div').innerHTML = ""

        } else {

            // transformando o array "exibirConta" em número inteiro e exibindo o número na calculadora
            document.querySelector('#resultado-div').innerHTML = parseInt(conta.join(''))

        }

    }
}

const atualizarConta = (a = 0, b = "a", operacao) => {
    if (a == "a") {
        return previaConta.join('')
    } else {

        a = parseInt(a)
        b = parseInt(b)

        switch (operacao) {
            case '+':
                return a + b
            case '-':
                return a - b
            case '*':
                return a * b
            case '/':
                return a / b
            default:
                return a
        }
    }
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