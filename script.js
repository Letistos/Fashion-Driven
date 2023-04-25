const nome = prompt("qual seu nome?");
console.log(nome);


function selecionarModelo(camiseta){

const selecioneiCamiseta = document.querySelectorAll('.roupa')

    for(i=0; i< selecioneiCamiseta.length; i++){

        selecioneiCamiseta[i].classList.remove('selecionado')
        
    }
        camiseta.classList.add('selecionado');
    
    console.log(camiseta);
}

function selecionaGola(gola){

    const selecioneiGola = document.querySelectorAll('.neck')
    
        for(i=0; i< selecioneiGola.length; i++){
    
            selecioneiGola[i].classList.remove('selecionado')
            
        }
            gola.classList.add('selecionado');
        
        console.log(gola);
    }

function selecionaGola(gola){

    const selecioneiGola = document.querySelectorAll('.neck')
        
        for(i=0; i< selecioneiGola.length; i++){
        
            selecioneiGola[i].classList.remove('selecionado')
                
        }
            gola.classList.add('selecionado');
            
            console.log(gola);
        }

function selecionaTecido(fabric){

    const selecioneiTecido = document.querySelectorAll('.pano')
            
        for(i=0; i< selecioneiTecido.length; i++){
            
            selecioneiTecido[i].classList.remove('selecionado')
                    
        }
            fabric.classList.add('selecionado');
                
            console.log(fabric);
            }
//function confirmaBotao()

function imgReferencia (){

    const input = document.querySelector('.link').target.value;
   // linkref = input.innerHTML.value;
    console.log(input);
}
