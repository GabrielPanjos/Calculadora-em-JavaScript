let conta = []
let exibirConta = []
let previaConta = []
let exibirPreviaConta = []
let resultado = "a"

const adicionarNumero = (index) => {

    if (previaConta[previaConta.length - 1] == "=") {
        previaConta = []
        document.querySelector('#sub-resultado-div').innerHTML = ""
    }

    if (exibirConta.length == 16) {
        document.querySelector('#resultado-div').innerHTML = exibirConta.join('')
    } else {
        exibirConta.push(index)

        // exibindo números adicionados na calculadora
        document.querySelector('#resultado-div').innerHTML = exibirConta.join('')

        // adicionando número no array "conta"
        conta.push(index)

        if (typeof (previaConta) === "number") {
            previaConta = String(previaConta).split('')
            previaConta.push(index)
        } else {
            previaConta.push(index)
        }
    }

}

const adicionarOperacao = (index) => {

    let op = index

    // transformando PreviaConta em um array
    exibirPreviaConta = previaConta.join('')
    previaConta = exibirPreviaConta.split('')


    // condição caso ja tenha operação (para não ter duas operações, ex: 8 x x, 8 + + + + )
    if (previaConta[previaConta.length - 1] == "x" || previaConta[previaConta.length - 1] == "%" || previaConta[previaConta.length - 1] == "+" || previaConta[previaConta.length - 1] == "-" || previaConta[previaConta.length - 1] == "÷" || previaConta == "") {

        // caso de certo
    } else {

        exibirConta = exibirConta.join('')

        previaConta.forEach(digito => {
            if (isNaN(digito)) {
                op = digito
                console.log(op)
            } else {

            }
        })


        if (op == "%") {

            previaConta.push('%')

            document.querySelector('#sub-resultado-div').innerHTML = previaConta.join('')

        } else if (op == "*") {

            console.log('foi')

            previaConta.push(' x')

            document.querySelector('#sub-resultado-div').innerHTML = atualizarConta(resultado, parseInt(exibirConta), op)

        } else if (op == "+") {

            previaConta.push(' +')

            document.querySelector('#sub-resultado-div').innerHTML = atualizarConta(resultado, parseInt(exibirConta), op)

        } else if (op == "-") {

            previaConta.push(' -')

            document.querySelector('#sub-resultado-div').innerHTML = atualizarConta(resultado, parseInt(exibirConta), op)

        } else if (op == "/") {

            previaConta.push(' ÷')

            document.querySelector('#sub-resultado-div').innerHTML = atualizarConta(resultado, parseInt(exibirConta), op)

        }


        if (resultado == "a") {
            resultado = parseInt(exibirConta)
        } else {
            resultado = parseInt(previaConta)
        }


        // limpando array "exibirConta"
        exibirConta = []
    }

}

const limparConta = () => {

    // limpando arrays "conta" e "exibirConta", e exibição dos números na calculadora
    document.querySelector('#resultado-div').innerHTML = "0"
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
        document.querySelector('#resultado-div').innerHTML = "0"

    } else {

        // removendo ultimo digito do array "conta"
        conta.pop()
        exibirConta.pop()
        previaConta.pop()


        // condição caso ele apague o ultimo dígito sobrando (para não exibir NaN)
        if (conta.length == 0) {

            // log caso tente apagar sem dígito
            document.querySelector('#resultado-div').innerHTML = "0"

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

        switch (operacao) {
            case '+':
                previaConta = a + b
                break
            case '-':
                previaConta = a - b
                break
            case '*':
                previaConta = a * b
                break
            case '/':
                previaConta = a / b
                break
            default:
                previaConta = a
                break
        }

        a = parseInt(a)
        b = parseInt(b)

        switch (operacao) {
            case '+':
                return (a + b) + " +"
            case '-':
                return (a - b) + " -"
            case '*':
                return (a * b) + " x"
            case '/':
                return (a / b) + " ÷"
            default:
                return a
        }
    }
}

const mostrarResultado = () => {

    // separando array "previaConta" e transformando em string
    previaConta = previaConta.join('')
    previaConta = previaConta.split('')

    // variáveis da função
    let mudar = true

    let primeira = []
    let segunda = []

    // mandando números para arrays "primeira" e "segunda"
    previaConta.forEach(numero => {

        switch (numero) {
            case '+':
                mudar = false
            case '-':
                mudar = false
            case 'x':
                mudar = false
            case '÷':
                mudar = false
            default:
        }

        if (mudar) {
            primeira.push(numero)
        } else if (mudar === false) {
            segunda.push(numero)
        }

    })

    // remove operação e o espaço
    previaConta.splice(primeira.length - 1, 1)
    segunda.splice(0, 1)
    primeira.splice(primeira.length - 1, 2)

    // transformando arrays primeira e segunda em números inteiros
    primeira = parseInt(primeira.join(''))
    segunda = parseInt(segunda.join(''))



    let resultado = 0

    // fazendo a operação
    previaConta.forEach(numero => {

        switch (numero) {
            case '+':
                resultado = primeira + segunda
                break
            case '-':
                resultado = primeira - segunda
                break
            case 'x':
                resultado = primeira * segunda
                break
            case '÷':
                resultado = primeira / segunda
                break
            default:
                document.querySelector('#resultado-div').innerHTML = 0
                break
        }
    })

    // mostrando resultado
    document.querySelector('#resultado-div').innerHTML = resultado

    // limpando arrays
    document.querySelector('#sub-resultado-div').innerHTML = previaConta.join(' ') + " ="
    previaConta = document.querySelector('#sub-resultado-div').innerHTML
    conta = []
    exibirConta = []
    exibirPreviaConta = []
    resultado = "a"

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

// Colocando evento para atualizar conta (mostrar resultado)
document.querySelector('#igual').addEventListener('click', () => mostrarResultado())