axios.defaults.headers.common['Authorization'] = '5MH3GBE7JWFZU8b8ft1wY2FM';

const url = 'https://mock-api.driven.com.br/api/v4/shirts-api/shirts';

const nome = prompt("qual seu nome?");

let objeto = { }

function selecionarModelo(camiseta,marcadorModelo){

    const selecioneiCamiseta = document.querySelectorAll('.roupa')

    for(i=0; i< selecioneiCamiseta.length; i++){

        selecioneiCamiseta[i].classList.remove('selecionado')  
    }
    
    camiseta.classList.add('selecionado');
    
    objeto.model = marcadorModelo;
   
}

function selecionaGola(gola,marcadorGola){

    const selecioneiGola = document.querySelectorAll('.neck')
    
    for(i=0; i< selecioneiGola.length; i++){
    
        selecioneiGola[i].classList.remove('selecionado')            
    }

    gola.classList.add('selecionado');

    objeto.neck = marcadorGola;    
}

function selecionaTecido(fabric,marcadorTecido){

    const selecioneiTecido = document.querySelectorAll('.pano')
            
    for(i=0; i< selecioneiTecido.length; i++){
            
        selecioneiTecido[i].classList.remove('selecionado')                    
    }

    fabric.classList.add('selecionado');

    objeto.material = marcadorTecido;
   
                
}

function confirmaBotao(elemento){

    let botoes = document.querySelectorAll('.selecionado')

    let inputDigitando = document.querySelectorAll('.link').value;

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

    const postPromise = axios.post(url,objeto);
    postPromise.then((resposta) => {
        console.log(resposta.status)
       
        if(resposta.status === 201){
            postarObjeto(resposta)
            alert('pedido confirmado com sucesso')
        }  
     
    })

    postPromise.catch((response) => postarErro(response));    
}   

function postarObjeto(resposta){  
    
    const promise = axios.get(url);
    promise.then((response) => modificaFooter(response.data))
   
    
}

function adicionaNome(){

    objeto.author = nome;
    console.log(objeto);   
}

adicionaNome();

const promise = axios.get(url);
promise.then((response) => modificaFooter(response.data))

let lista = [];
    
function modificaFooter (resposta) {    

    lista = resposta;
    
    let pedidosTela = "";

    for(let i =0; i < resposta.length; i++){

        pedidosTela += `
        <div class="pedidos-box" onclick="encomendarDoUltimo(${i})">  
        <img class="camiseta-ultimo" alt="referência enviada pelo usuário" src=${resposta[i].image} /> 
        <p><strong>Criador:</strong> ${resposta[i].owner}</p>
        </div>`;
    }

    let caixa = document.querySelector(".main-footer");
    caixa.innerHTML = pedidosTela;
    
}

function encomendarDoUltimo(i){

    
    if( confirm('confirma a encomenda desssa camiseta?') === true){
        
        console.log(lista[i]);
        lista[i].author = nome;
        delete lista[i].id;
        
    
        const postPromise = axios.post(url,lista[i]);
        postPromise.then((resposta) => postarObjeto(resposta))
    
        if(objeto.status === '422'){
            postPromise.catch(postarErro())
        }   
    }

    else{
        alert('você pode escolher outro modelo, ou criar o seu!')
    }
}

