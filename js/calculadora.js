const buttonCalcular = document.getElementById('calcular')
const buttonLimpar = document.getElementById('limpar')
const custoInput = document.getElementById('custo')
const margemInput = document.getElementById('margem')
const impostoInput = document.getElementById('imposto')

/* Função para calcular o preço sem imposto */
const precoSemImposto = function () {

    if (margemInput.value <= 0) {
        alert("O valor digitado para a margem de lucro não é válido!")
        document.getElementById('margem').value = '';
    } else if (impostoInput.value <= 0 || impostoInput.value >= 100) {
        alert("O valor digitado para a o imposto pago não é válido!")
        document.getElementById('imposto').value = '';
    } else {
        var preco = custoInput.value / (1 - (margemInput.value / 100))

        // Pegando a tabela pelo ID
        var table = document.getElementById('table')

        // Selecionando as linhas e células específicas
        var row = table.rows[3] // Quarta linha
        var cell = row.cells[1] // Segunda coluna

        cell.innerHTML = 'R$ ' + preco.toFixed(2)
        return preco
    }
}

/* Função para calcular a venda com imposto */
const vendaComImposto = function (preco) {
    if (margemInput.value <= 0) {
        alert("O valor digitado para a margem de lucro não é válido!")
        document.getElementById('margem').value = '';
    } else if (impostoInput.value <= 0 || impostoInput.value >= 100) {
        alert("O valor digitado para a o imposto pago não é válido!")
        document.getElementById('imposto').value = '';
    } else {
        var preco = precoSemImposto()
        if (preco !== null) {
            var venda = preco / (1 - (impostoInput.value / 100))

            var table = document.getElementById('table')

            var row = table.rows[5]
            var cell = row.cells[1]

            cell.innerHTML = 'R$ ' + venda.toFixed(2)
            return venda
        }
    }
}

/* Função para calcular o imposto em R$ */
const impostoReais = function () {
    if (margemInput.value <= 0) {
        alert("O valor digitado para a margem de lucro não é válido!")
        document.getElementById('margem').value = '';
    } else if (impostoInput.value <= 0 || impostoInput.value >= 100) {
        alert("O valor digitado para a o imposto pago não é válido!")
        document.getElementById('imposto').value = '';
    } else {
        var preco = precoSemImposto()
        var venda = vendaComImposto()
        if (preco !== null && venda !== null) {

            var imposto = venda - preco

            var table = document.getElementById('table')

            var row = table.rows[6]
            var cell = row.cells[1]

            cell.innerHTML = 'R$ ' + imposto.toFixed(2)
            return imposto
        }
    }
}

/* Função para calcular a margem em R$ */
const margemReais = function () {
    if (margemInput.value <= 0) {
        alert("O valor digitado para a margem de lucro não é válido!")
        document.getElementById('margem').value = '';
    } else if (impostoInput.value <= 0 || impostoInput.value >= 100) {
        alert("O valor digitado para a o imposto pago não é válido!")
        document.getElementById('imposto').value = '';
    } else {
        var preco = precoSemImposto()
        custo = custoInput.value

        if (preco !== null) {
            margem = preco - custo

            var table = document.getElementById('table')

            // Selecionando as linhas e células específicas
            var row = table.rows[8] // Quarta linha
            var cell = row.cells[1] // Segunda coluna

            cell.innerHTML = 'R$ ' + margem.toFixed(2)
            return margem
        }
    }
}

/* Função para calcular a margem em % */
const margemPercentual = function () {
    if (margemInput.value <= 0) {
        alert("O valor digitado para a margem de lucro não é válido!")
        document.getElementById('margem').value = '';
    } else if (impostoInput.value <= 0 || impostoInput.value >= 100) {
        alert("O valor digitado para a o imposto pago não é válido!")
        document.getElementById('imposto').value = '';
    } else {
        var preco = precoSemImposto()
        var margem = margemReais()
        if (preco !== null && margem !== null) {
            percentual = (margem / preco) * 100
            var table = document.getElementById('table')

            var row = table.rows[9]
            var cell = row.cells[1]
            cell.innerHTML = percentual.toFixed(2) + "%"
            return percentual
        }
    }
}

/* Função para calcular o imposto em % */
const impostoPercentual = function () {
    if (margemInput.value <= 0) {
        alert("O valor digitado para a margem de lucro não é válido!")
        document.getElementById('margem').value = '';
    } else if (impostoInput.value <= 0 || impostoInput.value >= 100) {
        alert("O valor digitado para a o imposto pago não é válido!")
        document.getElementById('imposto').value = '';
    } else {
        valorimposto = impostoReais();
        venda = vendaComImposto();
        if (valorimposto !== null && venda !== null) {
            imposto = (valorimposto/venda)*100
            var table = document.getElementById('table')

            var row = table.rows[10]
            var cell = row.cells[1]

            cell.innerHTML = imposto.toFixed(2) + "%"
        }
    }
}

/* Função para chamar todas as funções */
const allFunctions = function () {
    precoSemImposto()
    vendaComImposto()
    impostoReais()
    margemReais()
    margemPercentual()
    impostoPercentual()
}

/* Função para limpar os campos após o uso da calculadora */
const limparTela = function () {
    document.getElementById('custo').value = '';
    document.getElementById('margem').value = '';
    document.getElementById('precoSemImposto').innerHTML = '';
    document.getElementById('imposto').value = '';
    document.getElementById('vendaComImposto').innerHTML = '';
    document.getElementById('impostoReais').innerHTML = '';
    document.getElementById('margemReais').innerHTML = '';
    document.getElementById('margemPercentual').innerHTML = '';
    document.getElementById('impostoPercentual').innerHTML = '';
}

/* Função para verificar se os campos estão vazios */
const verificaCampos = function () {
    if (document.getElementById('custo').value === '' && document.getElementById('margem').value === '' && document.getElementById('precoSemImposto').innerHTML === '' && document.getElementById('imposto').value === '' && document.getElementById('vendaComImposto').innerHTML === '' && document.getElementById('impostoReais').innerHTML === '' && document.getElementById('margemReais').innerHTML === '' && document.getElementById('margemPercentual').innerHTML === '' && document.getElementById('impostoPercentual').innerHTML === '') {
        return true;
    }
    else {
        return false;
    }
}

/* Função de callback com evento de escuta ao clicar no botão Calcular no HTML */
buttonCalcular.addEventListener('click', function () {
    if (custoInput.value === '' || margemInput.value === '' || impostoInput.value === '') {
        alert('Por favor, preencha os campos necessários!')
    } else {
        allFunctions()
    }
})

/* Função de callback com evento de escuta ao clicar no botão Limpar no HTML */
buttonLimpar.addEventListener('click', function () {
    if (verificaCampos() === true) {
        alert('Todos os campos já estão vazios!')
    } else {
        limparTela()
    }
})