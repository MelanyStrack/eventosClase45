window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');


    titulo.addEventListener("mouseover", function(){
        if (titulo.style.color == "black") {
            titulo.style.color = "red"
        }else{
            titulo.style.color= `black`
        }
    })

    let estadoSecreto = 0;
    const inputTitulo = document.querySelector("#titulo");
    
    inputTitulo.addEventListener("keypress", function(e){
        estadoSecreto == 0 && e.key == "s" ? estadoSecreto += 1 : estadoSecreto == 1 && e.key == "e" ? estadoSecreto += 1 : estadoSecreto == 2 && e.key == "c" ? estadoSecreto += 1 : estadoSecreto == 3 && e.key == "r" ? estadoSecreto += 1 : estadoSecreto == 4 && e.key == "e" ? estadoSecreto += 1 :  estadoSecreto == 5 && e.key == "t" ? estadoSecreto += 1 : estadoSecreto == 6 && e.key == "o" ? window.alert("SECRETO MAGICO") : estadoSecreto = 0
        estadoSecreto == 1 && e.key == "e" ? estadoSecreto += 1 : null
        estadoSecreto == 2 && e.key == "c" ? estadoSecreto += 1 : null
        estadoSecreto == 3 && e.key == "r" ? estadoSecreto += 1 : null
        estadoSecreto == 4 && e.key == "e" ? estadoSecreto += 1 : null
        estadoSecreto == 5 && e.key == "t" ? estadoSecreto += 1 : null
        console.log("estado secreto", estadoSecreto);
        if (estadoSecreto == 6 && e.key == "o") {
            estadoSecreto = 0;
            window.alert("SECRETO MAGICO")
            console.log("estado secreto despues del alert", estadoSecreto);
        }
       

    })  
}