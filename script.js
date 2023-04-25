const nome = prompt("qual seu nome?");
console.log(nome);


function selecionar(){

const selecionei = document.querySelectorAll('.roupa.selecionado')

    for(i=0; i< selecionei.length; i++){
        if(selecionei[i] !== null){
        selecionei[i].classlist.remove('.selecionado')
        }
    }

    let vouSelecionar = document.querySelector(this)
    vouSelecionar.classList.add('selecionado');
    
    
    //selecionei.classList.add('selecionado'); 
    console.log(selecionei);
}
//function confirmaBotao()

function imgReferencia (){

    const input = document.querySelector('.link').target.value;
   // linkref = input.innerHTML.value;
    console.log(input);
}
