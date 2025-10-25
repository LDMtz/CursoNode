const http = require('node:http')
const { findAvailablePort } = require('./10_free-port.js')

//Crear el servidor
const server = http.createServer((req, res) => {
    console.log('request recibida')
    res.end('Hola mundo')
})

findAvailablePort(3000).then(port => {
    server.listen(port, () => {
        console.log(`Servidor escuchando en el puerto http://localhost:${port}`)
    })
})

//Callback para escuchar en dicho puerto (fijo)
/*
server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000')
})
*/

//Callback para escuchar en un puerto vacio
/*
server.listen(0, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${server.address().port}`)
})
*/