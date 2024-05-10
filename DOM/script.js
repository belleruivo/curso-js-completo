var p = document.getElementsByTagName('p');

for(var i = 0; i < 10; i++){
    p[0].innerHTML = p[0].innerHTML + i;
}

// p[0].innerHTML = 'manipulado via js'

// for(var i = 0; i < p.length; i++){
//     p[i].innerHTML = 'manipulado via js - ' + i;
// }


// lendo através das tags
// alert(p[2].innerHTML); 

// alert(p.length); conta quantos elementos com a tag existem