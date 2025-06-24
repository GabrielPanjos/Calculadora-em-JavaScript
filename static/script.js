let conta = []
let exibirConta = []
let previaConta = []
let exibirPreviaConta = []

let operacaoJaAdicionada = false

const adicionarNumero = (index) => {

    if (previaConta[previaConta.length - 1] == "=") {
        previaConta = []
        document.querySelector('#sub-resultado-div').innerHTML = ""
    }

    // não adicionar mais de 16 dígitos
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

    // transformando PreviaConta em um array
    exibirPreviaConta = previaConta.join('')
    previaConta = exibirPreviaConta.split('')


    // condição caso ja tenha operação (para não ter duas operações, ex: 8xx, 8++)
    if (previaConta[previaConta.length - 1] == "x" || previaConta[previaConta.length - 1] == "%" || previaConta[previaConta.length - 1] == "+" || previaConta[previaConta.length - 1] == "-" || previaConta[previaConta.length - 1] == "÷" || previaConta == "") {

        // caso de certo
    } else if (operacaoJaAdicionada == true) {
        mostrarResultado()

    } else if (operacaoJaAdicionada == false) {

        if (index == "x" || index == "÷" || index == "+" || index == "-" || index == "%") {

            previaConta.push(" " + index)

            document.querySelector('#sub-resultado-div').innerHTML = previaConta.join('')

            operacaoJaAdicionada = true

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
    operacaoJaAdicionada = false

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

const mostrarResultado = (index) => {

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
    let calcular = true

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
                calcular = false
                break
        }
    })

    if (calcular) {

    } else {
        // mostrando resultado
        document.querySelector('#resultado-div').innerHTML = resultado

        // limpando arrays caso aperte no botão de igual (=)
        if (index == "=") {
            document.querySelector('#sub-resultado-div').innerHTML = previaConta.join('') + " ="
            previaConta = document.querySelector('#sub-resultado-div').innerHTML
            conta = []
            exibirConta = []
            exibirPreviaConta = []
        } else {
            document.querySelector('#sub-resultado-div').innerHTML = previaConta.join('')

            previaConta.forEach(numero => {

                switch (numero) {
                    case '+':
                        document.querySelector('#sub-resultado-div').innerHTML = resultado + " +"
                        previaConta = resultado + "+"
                        break
                    case '-':
                        document.querySelector('#sub-resultado-div').innerHTML = resultado + " -"
                        previaConta = resultado + "-"
                        break
                    case 'x':
                        document.querySelector('#sub-resultado-div').innerHTML = resultado + " x"
                        previaConta = resultado + "x"
                        break
                    case '÷':
                        document.querySelector('#sub-resultado-div').innerHTML = resultado + " ÷"
                        previaConta = resultado + "÷"
                        break
                    default:

                        break
                }
            })

            exibirConta = []


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
document.querySelector("#virgula").addEventListener("click", () => adicionarNumero("."));

// Colocando eventos nas operações
document.querySelector('#multiplicar').addEventListener("click", () => adicionarOperacao("x"))
document.querySelector('#dividir').addEventListener("click", () => adicionarOperacao("÷"))
document.querySelector('#somar').addEventListener("click", () => adicionarOperacao("+"))
document.querySelector('#subtrair').addEventListener("click", () => adicionarOperacao("-"))
document.querySelector('#porcentagem').addEventListener("click", () => adicionarOperacao("%"))

// Colocando evento para limpar
document.querySelector('#limpar').addEventListener("click", () => limparConta())

// Colocando evento para apagar ultimo dígito
document.querySelector('#apagarDigito').addEventListener('click', () => apagarDigito())

// Colocando evento para atualizar conta (mostrar resultado)
document.querySelector('#igual').addEventListener('click', () => mostrarResultado("="))