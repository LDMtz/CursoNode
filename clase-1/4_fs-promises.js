const fs = require('node:fs/promises')

fs.readFile('./archivo.txt', 'utf-8')
    .then(text =>{
        console.log('Primer texto: ', text)
    })

console.log("Hacer cosas mientras lee el archivo")

fs.readFile('./archivo2.txt', 'utf-8')
    .then(text =>{
        console.log('Segundo texto: ', text)
    })
