// pegar todos os 'p' existentes no documento e selecionar só o primeiro
var p = document.getElementsByTagName('p');
//alert(p.length); // conta quantos elementos com a tag existem

// lendo através das tags   
// alert(p[0].innerHTML); 

// p[0].innerHTML = 'manipulado via js'

// for(var i = 0; i < p.length; i++){
//     p[i].innerHTML = 'manipulado via js - ' + i; //i é o indice q vc ta manipulando
// }

//mais dinamico
for(var i = 0; i < 10; i++){
    p[0].innerHTML = p[0].innerHTML + i;
    // p[0].innerHTML = p[0].innerHTML + "- algo -";
}