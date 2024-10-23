const { parcerias } = require("./parcerias")

function criarPaceria(numeroId, nomeEmpresaParceira, dataInicio, termosAcordo, status) {
     
    const novoParceira = {numeroId, nomeEmpresaParceira, dataInicio, termosAcordo, status };
  try {
    parcerias.push(novoParceira)
  } catch (error) {
    console.error("Erro ao cadartrar novo parceiro",error.message)
  }

}

module.exports = { criarPaceria };