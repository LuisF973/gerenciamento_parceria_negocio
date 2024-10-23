const { parcerias } = require("./parcerias")

function lerParcerias() {
    try {
        console.log(parcerias)
    } catch (error) {
        console.error("Erro ao lerPaceiros",error.message);
    }
}

module.exports = { lerParcerias }