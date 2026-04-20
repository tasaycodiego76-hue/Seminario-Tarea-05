# Seminario - Tarea 05

Aplicación web con gráficos estadísticos usando Chart.js y búsqueda de personas/empresas usando la API de Decolecta.

---

## 📁 Estructura del proyecto

```
Seminario/
├── Busqueda_Empresa/
│   └── busqueda_empresa.html
├── Busqueda_Persona/
│   └── busqueda_persona.html
├── Grafico_1/
│   └── Grafico_1.html
├── Grafico_2/
│   ├── Grafico_2.html
│   └── data.json
├── .gitignore
├── package.json
└── server.js
```

---

## 📊 Gráfico 1 - Barras (Lenguajes de Programación)

Gráfico de barras con 5 lenguajes de programación en el eje X. El usuario ingresa los valores en las cajas de texto y presiona el botón para actualizar el gráfico.

1. Abrir `Grafico_1.html` con Live Server
2. Ingresar valores en los inputs
3. Presionar **Actualizar Gráfico**

---

## 📈 Gráfico 2 - Líneas (Días de la Semana)

Gráfico de líneas con los días de la semana en el eje X. Los datos del eje Y se leen desde `data.json`.

1. Abrir `Grafico_2.html` con Live Server
2. Presionar **Cargar Gráfico**

---

## 🔍 Búsqueda de Persona por DNI

Consulta nombres y apellidos de una persona por su número de DNI usando la API de Decolecta.

1. Instalar dependencias:
```bash
npm install 
```

2. Obtener tu token en https://decolecta.com/ y colocarlo en `server.js`:
```javascript
const TOKEN = "TU_TOKEN_AQUI"
```

3. Correr el servidor:
```bash
node server.js
```

4. Abrir en el navegador:
```
http://localhost:3000/busqueda_persona.html
```

---

## 🏢 Búsqueda de Empresa por RUC

Consulta razón social, estado, dirección, distrito, provincia y departamento de una empresa por su RUC usando la API de Decolecta.

1. Asegurarse que el servidor esté corriendo:
```bash
node server.js
```

2. Abrir en el navegador:
```
http://localhost:3000/busqueda_empresa.html
```

---

## 🛠️ Tecnologías utilizadas

```
HTML        - Estructura de las páginas
JavaScript  - Lógica del cliente
Chart.js    - Gráficos estadísticos
Node.js     - Entorno de ejecución del servidor
Decolecta   - API de consulta de DNI y RUC
```