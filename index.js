const express = require('express')
const app = express()
const path = require('node:path')

app.use(express.static('assets/'))
app.use('/librerias',express.static('node_modules'));

app.get('/', function(request,response){
    response.sendFile(path.join(__dirname, '/vistas/index.html'));
})

app.get('/gastos', function(request,response){
    response.sendFile(path.join(__dirname,'/vistas/gastos.html'))
})

app.get('/ingresos', function(request,response){
    response.sendFile(path.join(__dirname,'/vistas/ingresos.html'))
})

app.listen(3000, function(){
    console.log('Servidor escuchando en el puerto 3000 de manera correcta')
})