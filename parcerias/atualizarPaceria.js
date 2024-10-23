const { parcerias } = require("./parcerias")

function atualizarPaceria(novonumeroId, novonome, novaData, novoTermos, novoStatus) {
    try {
        const parceira = parcerias.find(elementodoarray =>
            elementodoarray.novonumeroId === novonumeroId
        )
        if (parceira) {
            parceira.nomeEmpresaParceira = novonome
            parceira.dataInicio = novaData
            parceira.termosAcordo = novoTermos
            parceira.status = novoStatus
            console.log("parceira atualizada com sucesso!")

        }else {
            console.log("parceira nao encontrada")
        }
    } catch (error) {
        console.error("Erro ao atualizar um parceira",error.message)
    }
}

module.exports = { atualizarPaceria }