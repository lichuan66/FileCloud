const path = require('path')
const fs = require('fs')

const readFolderCount = function (path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, files) => {
            if (err) {
                reject(err)
            }
            const folder = []
            if (!files) {
                resolve(folder)
            } else {
                files.forEach((file, idx) => {
                    folder.push({
                        id: idx,
                        name: file
                    })
                })
                resolve(folder)
            }
        })
    })
}
module.exports = readFolderCount