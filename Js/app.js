//Criar a função para coletar o cep do input

function Coletar() {
    let input = document.querySelector('.input-cep').value
    //teste
    console.log(input)
    Dados(input)
}

//Função para consumir API Via CEP
async function Dados(input) {
    let dados = await fetch(`https://viacep.com.br/ws/${input}/json/`).then(response => response.json())
    console.log(dados)
    ExibirDados(dados)
}

//Função Inserir dados na tela
function ExibirDados(dados) {
    document.querySelector('.estado').value = dados.uf
    document.querySelector('.cidade').value = dados.localidade
    document.querySelector('.endereco').value = dados.logradouro
    document.querySelector('.ddd').value = dados.ddd
}