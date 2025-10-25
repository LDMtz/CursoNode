const net = require('node:net')

function findAvailablePort(desiredPort) {
    return new Promise((resolve, reject) => {
        const server = net.createServer()

        //En caso de que esté esuchando
        server.listen(desiredPort, () => {
            const { port } = server.address()
            server.close(() => {
                resolve(port)
            })
        })

        server.on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                findAvailablePort(0).then(resolve)
            } else {
                reject(err)
            }
        })
    })
}

module.exports = { findAvailablePort }