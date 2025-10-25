const fs = require('node:fs')

// Forma sincrona
//const firstText = fs.readFileSync('./archivo.txt', 'utf-8')
//const secondText = fs.readFileSync('./archivo2.txt', 'utf-8')

// Forma asincrona
fs.readFile('./archivo.txt', 'utf-8', (err,text) => { //<-- Callback
    console.log(text)
})
console.log("Hacer cosas mientras lee el archivo")

fs.readFile('./archivo2.txt', 'utf-8', (err,text) => { 
    console.log(text)
})
