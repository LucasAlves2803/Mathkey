const express = require('express');
const path = require('path');

const app = express();
const port = 3000;  // Porta em que o servidor será executado

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(__dirname));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/mathkey7.html'));
  });
  

// Iniciar o servidor e escutar em todas as interfaces de rede
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://192.168.1.4:${port}`);
});