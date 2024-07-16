function geral(){
    const form = document.querySelector('#form')
    const resultado = document.querySelector('#tarefa')

     

    let tarefa = [];
    let cont = 0;

    function naoEnviar (enviar){
        enviar.preventDefault();

        const caixaDigita = document.querySelector('#caixa-digita')
        tarefa.push({
            caixaDigita: caixaDigita.value
    })
    cont += 1;

    resultado.innerHTML += `<p>${cont} => ${caixaDigita.value} </p>`

    }
    addEventListener('submit', naoEnviar);

    

}
geral();