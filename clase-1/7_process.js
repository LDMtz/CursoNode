//Argumentos de entrada (En la terminal)
console.log(process.argv)

//Contolar eventos del proceso
process.on('exit',()=>{
    //Hacer algo
})

//Directorio actual de trabajo - Current working directory
//Desde donde se ejecuta el proceso
console.log(process.cwd())

// Plataforma
console.log(process.platform)

// Variables de entorno
console.log(process.env.PRUEBA)

//Controlar el proceso y su salida
process.exit(0) //<- 0 (Todo salió bien) y 1 (Pasó algo y salir)