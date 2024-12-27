// me retorna uma funcao que pode ser resolvida, ou ela é rejeitada

function testes(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const erro = false;
            if(erro){
                reject("Ops... Algo deu errado!");
            }else{
                resolve("A Promisse foi resolvida com sucesso.");
            }
        }, 5000);
    });
}

// testes().then(function(res){
//     alert(res);
// }).catch(function(err){
//     alert(err);
// });

// funcoes assincronas - forma mais elegante de retornar uma promise
// o await diz que so quer q execute o alert ola depois que a promisse for resolvida, ou seja dos 5 segundos

async function testes2(){
    await testes().then(function(res){
        alert(res);
    });
    alert('ola');
}

testes2();