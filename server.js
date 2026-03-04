const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Servir archivos estáticos desde el directorio actual (donde está index.html, css/, js/, assets/)
app.use(express.static(__dirname));

// Ruta principal explícita (opcional, express.static ya maneja index.html por defecto)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
