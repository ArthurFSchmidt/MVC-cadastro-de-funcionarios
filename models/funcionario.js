const db = require('./database');


async function selectAll() {
    const connection = await db.conectar();

    const [rows] = await connection.execute({sql:'SELECT * FROM funcionario', rowsAsArray:false})
    
    return rows;
}

async function addFuncionario(nome, pis, cpf, rg, email, telefone, foto) {
    const connection = await db.conectar();

    connection.execute(
        'INSERT INTO `funcionario` (`nome`, `pis`, `cpf`, `rg`, `email`, `telefone`, `foto`) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [nome, pis, cpf, rg, email, telefone, foto]
    )


}


module.exports = {addFuncionario, selectAll}
