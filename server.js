const express = require('express')
const app = express()

// Permite servir el HTML desde el mismo servidor
app.use(express.static('Busqueda_Persona'))

const TOKEN = "sk_11580.yJlrKF9N2DUX3evbJRljPSpCND3BuWWG"

app.get('/buscar-dni', function (req, res) {
    const dni = req.query.numero

    fetch(`https://api.decolecta.com/v1/reniec/dni?numero=${dni}`, {
        headers: {
            "Authorization": `Bearer ${TOKEN}`,
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => res.json(data))
})

app.listen(3000, function () {
    console.log('Servidor corriendo en http://localhost:3000')
})