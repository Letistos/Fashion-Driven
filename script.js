axios.defaults.headers.common['Authorization'] = '5MH3GBE7JWFZU8b8ft1wY2FM';
const nome = prompt("qual seu nome?");
console.log(nome);
let objeto = { }
const url = 'https://mock-api.driven.com.br/api/v4/shirts-api/shirts';

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


function confirmaBotao(){
    let botoes = document.querySelectorAll('.selecionado')
    console.log(botoes);   

    if(botoes.length === 3){
        let liberarBotao = document.querySelector('.botaoFinal')
        liberarBotao.removeAttribute('disabled');
        liberarBotao.classList.add('habilitado');
    }
}
confirmaBotao();

function imgReferencia (link){

    const input = document.querySelector('.link').value;
    objeto.image = input;
    
    console.log(objeto);
}


function adicionaNome(){

    objeto.author = nome;
    console.log(objeto);   
}
adicionaNome();

const requisicao = axios.post(url, objeto);
requisicao.then(processarResposta)
function processarResposta(resposta){
	console.log(resposta.data);
}

