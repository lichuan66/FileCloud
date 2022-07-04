import React, { useState, useRef } from 'react'
import { DownloadOutlined, FolderAddOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import './index.less'
import {
    LeftOutlined,
    RightOutlined,
    RedoOutlined
} from '@ant-design/icons';
import { Space } from 'antd';

export default function SearchHead(props) {
    const { createFolder, navigation, getData } = props
    const [searchValue, setSearchValue] = useState('')

    const inputElement = useRef()
    const input = inputElement.current

    const deleteStyle = searchValue === '' ?
        {
            visibility: 'hidden'
        } : {
            visibility: 'visible'
        }


    function deleteItem() {
        input.value = ''
        input.focus()
    }

    return (
        <div className='searchhead-container'>
            <div className='searchhead-content'>
                <div className='searchhead-content-top'>
                    <Button
                        className='submit'
                        type="primary"
                        shape="round"
                        icon={<DownloadOutlined />}>
                        上传
                    </Button>
                    <Button
                        className='create'
                        onClick={createFolder}
                        type="primary"
                        shape="round"
                        icon={<FolderAddOutlined />}>
                        新建文件夹
                    </Button>
                    <div className='search-box'>
                        <input
                            className='input'
                            ref={inputElement}
                            type="text"
                            placeholder='搜索我的网盘文件'
                            onFocus={() => { input.placeholder = ''; }}
                            onBlur={() => { if (input.value === '') input.placeholder = '搜索我的网盘文件' }}
                            onChange={(e) => { setSearchValue(e.target.value) }}
                        />
                        <div className='search-box-manage'>
                            <button
                                className='delete'
                                style={deleteStyle}
                                onClick={deleteItem}
                            >x</button>
                            <span>|</span>
                            <button
                                className='search-button'
                                onClick={() => { console.log('点击搜索'); }}
                            >搜索</button>
                        </div>
                    </div>
                </div>
                <div className='searchhead-content-bottom'>
                    <div className='search-back' onClick={() => { navigation(-1) }}>
                        <Space>
                            <LeftOutlined />
                        </Space>
                    </div>
                    <div className='search-go' onClick={() => { navigation(1) }}>
                        <Space>
                            <RightOutlined />
                        </Space>
                    </div>
                    <div className='search-flesh' onClick={() => { getData() }}>
                        <Space>
                            <RedoOutlined />
                        </Space>
                    </div>
                    <div className='search-path'>
                        <Space>
                            我的网盘
                            <RightOutlined />
                        </Space>
                    </div>
                </div>
            </div>
        </div>
    )
}
