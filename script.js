let opcoes=[];
const promessa = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes');
promessa.then(resposta);

const catalogo = document.querySelector(".movies");

function resposta(retorno){
    opcoes = retorno.data;
    for(let i=0; i < opcoes.length; i++){
        catalogo.innerHTML += `
        <div class="movie" id = "${opcoes[i].id}">
        <img src=${opcoes[i].imagem}>
        <div class="title">${opcoes[i].titulo}</div>
        <button onclick='comprar(this) nomeFilme(this)'>
          Comprar
          <ion-icon name="cart-outline"></ion-icon>
        </button>
      </div>
        `
    }
}

function comprar(filmeSelecionado){
    const nome = prompt('Nome do comprador:');
    const assentos = prompt('Quantidade de assentos');

    const informacaoComprador = {
        nome: nome,
        quantidade: assentos
    }
    axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes/'+filmeSelecionado.id+'/ingresso', informacaoComprador)

}

function erro(){
    alert("Os ingressos para esse filme estão esgotados!")
}