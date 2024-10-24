const prompt = require("prompt-sync")();

const { criarPaceria } = require("./parcerias/criarParceria");
const { lerParcerias } = require("./parcerias/lerParcerias");
const { deletarParceria } = require("./parcerias/deletarParceria")
const { atualizarPaceria} = require("./parcerias/atualizarPaceria")


criarPaceria("1234678","coca colos","27/07/2023", "cada parceira com o seu faturamento","produtiva");
criarPaceria("1235476","zeziCar","23/09/2023","cada parceira com o seu faturamento","produtiva")
lerParcerias();


//atualizarPaceria("1235476","zezocar","30/09/2023","cada parceira com o seu faturamento","produtiva")
//lerParcerias();


// deletarParceria("1235476")
// lerParcerias();

