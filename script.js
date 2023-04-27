axios.defaults.headers.common['Authorization'] = '5MH3GBE7JWFZU8b8ft1wY2FM';
const nome = prompt("qual seu nome?");
console.log(nome);
let objeto = { }
const url = 'https://mock-api.driven.com.br/api/v4/shirts-api/shirts';
let contador="";

function selecionarModelo(camiseta,marcadorModelo){

const selecioneiCamiseta = document.querySelectorAll('.roupa')

    for(i=0; i< selecioneiCamiseta.length; i++){

        selecioneiCamiseta[i].classList.remove('selecionado')
        
    }
        camiseta.classList.add('selecionado');
    
    objeto.model = marcadorModelo;
    console.log(objeto)
}

function selecionaGola(gola,marcadorGola){

    const selecioneiGola = document.querySelectorAll('.neck')
    
    for(i=0; i< selecioneiGola.length; i++){
    
        selecioneiGola[i].classList.remove('selecionado')
            
    }
    gola.classList.add('selecionado');
    objeto.neck = marcadorGola;
        
    console.log(objeto);

    
}

function selecionaTecido(fabric,marcadorTecido){

    const selecioneiTecido = document.querySelectorAll('.pano')
            
    for(i=0; i< selecioneiTecido.length; i++){
            
        selecioneiTecido[i].classList.remove('selecionado')
                    
    }
    fabric.classList.add('selecionado');
    objeto.material = marcadorTecido;
        
    console.log(objeto);
                
}

function confirmaBotao(elemento){
    let botoes = document.querySelectorAll('.selecionado')
    let inputDigitando = document.querySelectorAll('.link').value;

    console.log(botoes); 

    if(botoes.length === 3 && elemento === 'teste' ){
        let liberarBotao = document.querySelector('.botaoFinal')
        liberarBotao.removeAttribute('disabled');
        liberarBotao.classList.add('habilitado');
        objeto.owner = nome;
    }
  

    
}
function postarErro(){

 alert('Ops, não conseguimos processar sua encomenda')
    

}
confirmaBotao();

function imgReferencia (link){

    const input = document.querySelector('.link').value;
    objeto.image = input;
    
    
    console.log(objeto);

    const postPromise = axios.post(url,objeto);
    postPromise.then((resposta) => postarObjeto(resposta))
    if(objeto.status === '422'){
    postPromise.catch(postarErro())
    
}

}

function postarObjeto(resposta){

    if(objeto.status==='201' || objeto.status==='403'){
        alert('pedido enviado')
    }
    const promise = axios.get(url);
    promise.then((response) => modificaFooter(response.data))

}
function adicionaNome(){

    objeto.author = nome;
    console.log(objeto);   
}
adicionaNome();



    console.log(url)
    const promise = axios.get(url);
    promise.then((response) => modificaFooter(response.data))
    
function modificaFooter (resposta) {
    console.log(resposta)
    
    let pedidosTela = "";
    
    for(let i =0; i < resposta.length; i++){
        pedidosTela += `<div class="pedidos-box" onclick="encomendarDoUltimo(${resposta[i].image}, ${resposta[i].material}, ${resposta[i].neck}, ${resposta[i].model}, ${resposta[i].owner})">  <img class="camiseta-ultimo" alt="referência enviada pelo usuário" src=${resposta[i].image} /> <p><strong>Criador:</strong> ${resposta[i].owner}</p></div>`;
    }
    let caixa = document.querySelector(".main-footer");
    caixa.innerHTML = pedidosTela;
    console.log(caixa)
}




function encomendarDoUltimo(img,tipoTecido,tipoGola,tipoModelo,dono){

    let objDoUltimos = {image: img, material:tipoTecido, neck:tipoGola , model:tipoModelo, owner:dono, author: nome}
        

    const novaPromise = axios.post(url,objDoUltimos);
    novaPromise.then((respostaPost) => novoPost(respostaPost))

    if(objeto.status === '422'){
    novaPromise.catch(postarErro())
    }
}
function novoPost(postou){
    console.log('oioi')
}
