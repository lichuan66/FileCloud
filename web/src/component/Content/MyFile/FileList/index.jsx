import React, { useState, useRef } from 'react'
import './index.less'
import {
    FolderFilled
} from '@ant-design/icons';
import axios from 'axios'

export default function FileList(Props) {

    // 从父组件获取从后端读取的文件夹信息数组
    const {
        folderArr,
        renameFolder,
        activeIdx,
        setActive,
        enterFolder } = Props



    function renderRow(folderArrObj, idx) {
        const boxStyle = idx === activeIdx ?
            {
                backgroundColor: 'rgba(229, 254, 254, 0.7)',
                border: '1px solid rgb(108, 174, 244)',
            } : {}

        const inputState = idx === activeIdx ? 'true' : 'false'
        return (
            <div className='file-list-title-box'
                onClick={(e) => { setActive(idx); e.stopPropagation(); }}
                onDoubleClick={() => { enterFolder(folderArr[idx].name) }}
                style={boxStyle}>
                <FolderFilled className='file-icon' />
                <div className='file-info' >
                    <div className='file-name'
                        suppressContentEditableWarning contentEditable={inputState}
                        onBlur={(e) => {
                            let isUpdate = true
                            folderArr.forEach(element => {
                                if (element.name === e.target.textContent) {
                                    if (element.id !== idx) {
                                        alert('文件名重复，请重新输入')
                                        e.target.textContent = folderArr[idx].name
                                        isUpdate = false
                                    }
                                    isUpdate = false
                                }
                            });
                            if (isUpdate === true) {
                                renameFolder(e.target.textContent, idx)
                            }
                        }}
                        onKeyDown={(e) => { if (e.key === 'Enter') { ; e.target.blur(e) } }}>
                        {folderArrObj.name}
                    </div>
                </div>
            </div >
        )
    }

    return (
        <div className='file-list-container' onClick={() => { setActive(-1); }}>
            <ul className='file-list-content'>
                {
                    folderArr.map((folderArrObj, idx) => {
                        return (
                            <li className='file-list-title' key={folderArrObj.id}>
                                {renderRow(folderArrObj, idx)}
                            </li>
                        )
                    })
                }
            </ul>
        </div >
    )
}
