const { parcerias } = require("./parcerias")

function excluirTodasParcerias() {
    try {
        parcerias.length = 0
    } catch (error) {
        console.erro("erro ao excluir todas as parcerias")
    }
}

module.exports = {excluirTodasParcerias}