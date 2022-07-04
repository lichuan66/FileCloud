const path = require('path')
const fs = require('fs')
const readFolderCount = require('./readFolderCount')

const renameFolder = async function (storePath, newName, id) {
    const folderArr = await readFolderCount(storePath)
    return new Promise((resolve, reject) => {
        const oldName = folderArr.filter((item) => {
            if (item.id === parseInt(id)) {
                return item
            }
        })[0].name
        const oldPath = path.join(storePath, `${oldName}`)
        const newPath = path.join(storePath, `${newName}`)
        console.log(oldName, newName);
        console.log(oldPath, newPath);
        fs.rename(oldPath, newPath, (err, r) => {
            if (err) {
                reject('更新文件名失败');
            }
            resolve('更新文件名成功')
        })
    })
}

module.exports = renameFolder