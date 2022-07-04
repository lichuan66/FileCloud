const path = require('path')
const fs = require('fs')

function createFolder(newFolder) {
    return new Promise((resolve, reject) => {
        fs.mkdir(newFolder, (err) => {
            if (err) {
                reject(false)
            } else {
                resolve(true)
            }
        })
    })
}

module.exports = createFolder