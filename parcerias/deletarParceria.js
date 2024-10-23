const { parcerias } = require("./parcerias")


function deletarParceria(numeroId) {
    try {
        const indice = parcerias.findIndex(elementodoarray =>
            elementodoarray.numeroId === numeroId
        )
        if (indice === -1) {
            console.log("parceria nao encontrada")
        }else{
            parcerias.splice(indice, 1)
            console.log("parceria deletada com secesso!")
        }
    } catch (error) {
        console.error("erro ao excluir parceiro",error.message)
    }
}

module.exports = { deletarParceria }