const prompt = require("prompt-sync")();

const { criarPaceria } = require("./parcerias/criarParceria");
const { lerParcerias } = require("./parcerias/lerParcerias");
const { deletarParceria } = require("./parcerias/deletarParceria")
const { atualizarPaceria} = require("./parcerias/atualizarPaceria")
const {excluirTodasParcerias} = require("./parcerias/excluirTodasParcerias")


criarPaceria("1234678","coca colos","27/07/2023", "cada parceira com o seu faturamento","produtiva");
criarPaceria("1235476","zeziCar","23/09/2023","cada parceira com o seu faturamento","produtiva")
lerParcerias();


//atualizarPaceria("1235476","zezocar","30/09/2023","cada parceira com o seu faturamento","produtiva")
//lerParcerias();


// deletarParceria("1235476")
// lerParcerias();


function exibirMenu(){
    console.log("===================");
    console.log(" 1 - criar parceira:");
    console.log(" 2 - atualizar parceira:");
    console.log(" 3 - deletar parceira:");
    console.log(" 4 - ler parceria");
    console.log(" 5 - sair do sistema");
    console.log("====================");
}

let opcao;
do {
    exibirMenu()
    opcao = parseInt(prompt("digite um numero"));
    let numeroId;
    switch (opcao) {
      case 1:
        numeroId = prompt("digite o numeroId do parceiro")
        let nomeEmpresaParceira = prompt("digite o nome do parceiro")
        let dataInicio = prompt("digite a data do inicio da parceria")
        let termosAcordo = prompt("digite os termos da parceria")
        let status = prompt("digite o status da parceria")
        criarPaceria(numeroId, nomeEmpresaParceira, dataInicio, termosAcordo, status)
        break;
     case 2:
        numeroId = prompt("digite o numeroId do parceiro ")
        let novoNome = prompt("digite o novo nome")
        let novoData = prompt("digite uma nova data")
        let novoTermos = prompt("digite um novo termo")
        let novoStatus = prompt("digite um novo status")
        atualizarPaceria(numeroId, novoNome, novoData, novoTermos, novoStatus)
        lerParcerias();
        break;
        case 3:
         numeroId = prompt("digite o numero da parceria")
         deletarParceria(numeroId)
         break;
     case 4:
        numeroId = prompt("digite o Id da parceria")
        lerParcerias();
        break;
     case 5:
            console.log("saindo do sistema")
            break;
     case 6:
        console.log("valor invalido") 
        break;                
    }
}while (opcao !== 5);