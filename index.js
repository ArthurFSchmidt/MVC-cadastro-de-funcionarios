const express = require('express');
const express_ejs_layouts = require('express-ejs-layouts');
const funcionarioController = require('./controllers/funcionarioController');
const app = express();
const port = 3000;

app.use(express_ejs_layouts);
app.set("layout", "./index");
app.set('view engine', 'ejs'); 

app.listen(port, () => { 
    console.log(`Servidor rodando em http://localhost:${port}`);
    });
    
app.get('/',(req,res)=>res.redirect('/funcionarios'));

app.get('/funcionarios', funcionarioController.getFuncionarios);




