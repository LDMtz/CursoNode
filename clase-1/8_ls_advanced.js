const fs = require('node:fs/promises')
const path = require('node:path')

const pc = require('picocolors')

//Para que tome el 2 argumento pasado en la terminal
const folder = process.argv[2] ?? '.'

//
async function ls(folder) {
    let files
    try {
        files = await fs.readdir(folder)
    } catch {
        console.error(pc.red(`No se pudo leer el directorio ${folder}`))
        process.exit(1)
    }

    const filesPromises = files.map(async file => {
        const filePath = path.join(folder, file)
        let stats
        try {
            stats = await fs.stat(filePath)
        } catch {
            console.error(filePath)
        }

        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'd' : 'f'
        const fileSize = stats.size
        const fileModified = stats.mtime.toLocaleString()

        return `${fileType} ${pc.blue(file.padEnd(20))} ${pc.green(fileSize.toString().padStart(10))} ${fileModified}`
    })

    const filesInfo = await Promise.all(filesPromises)

    filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)

