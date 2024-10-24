const { parcerias } = require("./parcerias")
var validator = require("validator")

function criarPaceria(numeroId, nomeEmpresaParceira, dataInicio, termosAcordo, status) {
     
    const novoParceira = {numeroId, nomeEmpresaParceira, dataInicio, termosAcordo, status };
  try {
    if(
      validator.isEmpty(numeroId) ||
      validator.isEmpty(nomeEmpresaParceira) ||
      validator.isEmpty(dataInicio) ||
      validator.isEmpty(termosAcordo) ||
      validator.isEmpty(status)
    ){
      console.log("todos os campos devem ser preenchidos")
    }
    parcerias.push(novoParceira)
  } catch (error) {
    console.error("Erro ao cadartrar novo parceiro",error.message)
  }

}

module.exports = { criarPaceria };