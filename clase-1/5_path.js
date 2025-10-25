const path = require('node:path')

// `.content/subfolder/test.txt` <- Esta mal crear la rutas asi

// Barra separadora de carpetas segun el Sistema Operativo
console.log(path.sep)

//Unir rutas con path.join
const filePath = path.join('content','subfolder','test.txt')
console.log(filePath)

//Obtener el fichero de una ruta
const base = path.basename('tmp/secrets/password.txt')
console.log(base)

//Obtener el nombre del fichero sin la extensión
const filename = path.basename('tmp/secrets/password.txt', '.txt')
console.log(filename)

//Obtener la extensión
const extension = path.extname('image.jpg')
console.log(extension)