const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001; // Usamos 3001 para evitar conflictos con otros servicios

// Servir archivos estáticos desde el directorio actual (donde está index.html, css/, js/, assets/)
app.use(express.static(path.join(__dirname, '/')));

// Ruta principal explícita (opcional, express.static ya maneja index.html por defecto)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Para desarrollo local
if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`Servidor corriendo en http://localhost:${port}`);
    });
}

// Exportar para Vercel
module.exports = app;
