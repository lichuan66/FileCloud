import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import FileList from './FileList'
import SearchHead from './SearchHead'
import axios from 'axios'
import './index.less'
import QueryString from 'query-string'

export default function MyFile() {
    const [folderArr, setFolderArr] = useState([])
    // 设置activeIdx区分每个文件夹box
    const [activeIdx, setActive] = useState(-1)
    // 我的网盘下的路径\
    const [folderPath, setFolderPath] = useState('')
    // 路由hook进行前进后退
    const navigation = useNavigate()
    const location = useLocation()

    // 请求数据的方法
    async function getData() {
        const { path } = QueryString.parse(location.hash);
        const response = (await axios({
            method: 'POST',
            url: `http://localhost:4000${location.pathname}`,
            params: {
                folderPath: path ? path : '',
            }
        })).data
        setFolderArr(response.folderArr)
        setFolderPath(path ? path : '')
    }

    useEffect(() => {   // didmount钩子中初始化请求数据
        getData()
    }, [location.hash])

    // 重命名文件夹方法
    async function renameFolder(newName, id) {
        const msg = await axios({
            method: 'POST',
            url: 'http://localhost:4000/updateFolder',
            params: {
                newName,
                id,
            }
        })
        console.log(msg);
    }

    // 新建文件夹方法
    async function createFolder() {
        let newFolder = '新建文件夹'
        let count = 1
        function checkRepeatName() {
            folderArr.forEach(element => {
                if (element.name === newFolder) {
                    newFolder = `新建文件夹(${count})`
                    count++;
                    checkRepeatName(newFolder)
                }
            });
        }
        checkRepeatName()
        setFolderArr([{ id: folderArr.length + 1, name: newFolder }, ...folderArr])
        setActive(0)
        const msg = await axios({
            method: 'POST',
            url: 'http://localhost:4000/createFolder',
            params: {
                newFolder,
            }
        })
    }

    // 进入下一级文件夹
    function enterFolder(folder) {
        getData()
        navigation(`/firstpage/myfile/hometown#/index?category=all&path=${folderPath}/${folder}`);
    }



    return (
        <div className='myfile-container'>
            <SearchHead
                createFolder={createFolder}
                navigation={navigation}
                getData={getData} />
            <FileList
                folderArr={folderArr}
                style={{ flex: '1' }}
                activeIdx={activeIdx}
                setActive={setActive}
                renameFolder={renameFolder}
                enterFolder={enterFolder} />
        </div>
    )
}
