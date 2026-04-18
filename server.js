const express = require('express')
const app = express()

// Permite servir el HTML desde el mismo servidor
app.use(express.static('Busqueda_Persona'))
app.use(express.static('Busqueda_Empresa'))

const TOKEN = "sk_11580.SJ1QONzkOs0DKyhtxK4xwkC9uOB5JGSu"

// Ruta para buscar Persona por DNI
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

// Ruta para buscar empresa por RUC
app.get('/buscar-ruc', function (req, res) {
    const ruc = req.query.numero
 
    fetch(`https://api.decolecta.com/v1/sunat/ruc?numero=${ruc}`, {
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
//Abrir en el navegador:
//http://localhost:3000/busqueda_empresa.html
//http://localhost:3000/busqueda_persona.html