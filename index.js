const fs = require('fs');

const filePath = 'ponte.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }

    const filterMessage = require('./filterMessage.js');
    let campo = data.split("XKX");

    let txt = campo[0];
    let keyword = campo[1];
    let base = null
    const database = {
        "user4": campo[3].split("YKY")
    };
    const silence = campo[4].split("YKY");

    console.log(filterMessage(txt, keyword, base, database, silence));
    //resultado -> true

});



/*
const filterMessage = require('./filterMessage.js');


{//Exemplo 1
    let txt = "sobre o balanceamento dos eventos";
    let keyword = "user4";
    let base = null; //para os sem restrição.
    const database = {
        "user1": [null],
        "user2": [null],
        "user3": [null],
        "user4": ["atualização", "balanceamento", "evento", "disponível"],
        "user5": ["beta", "preview", "alerta", "saiu"]
    };
    const silence = ["spam", "torneio", "campeonatos"];

    console.log(filterMessage(txt, keyword, base, database, silence));
    //resultado -> true
}

{//Exemplo 2
    let txt = "sobre o financeiro[...]";
    let keyword = "user4";
    let base = null; //para os sem restrição.
    const database = {
        "user4": ["atualização", "balanceamento", "evento", "disponível"]
    };
    const silence = ["spam", "torneio", "campeonatos"];

    console.log(filterMessage(txt, keyword, base, database, silence));
    //resultado -> false
}
*/