const funcionarioModel = require('../models/funcionario');


async function getFuncionarios(req, res) {
    let funcionarios = await funcionarioModel.selectAll()
    console.log(funcionarios);
    res.render("index", {funcionarios});
}

async function createNewFuncionario(nome, pis, cpf, rg, email, telefone, foto) {
    funcionarioModel.addFuncionario(nome, pis, cpf, rg, email, telefone, foto);
}

module.exports = {getFuncionarios, createNewFuncionario}