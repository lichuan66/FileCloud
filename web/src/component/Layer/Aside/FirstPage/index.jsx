import React, { useState } from 'react'
import './index.less'
import {
    CaretRightOutlined,
    CaretDownOutlined,
    HistoryOutlined,
    PictureOutlined,
    PlaySquareOutlined,
    FileTextOutlined,
    CustomerServiceOutlined
} from '@ant-design/icons';
import { Space } from 'antd';
import { Link } from 'react-router-dom'

export default function FirstPage() {

    const [activeIdx, setActive] = useState(0)
    const [myDocActiveIdx, setMyDocActive] = useState(-1)
    const [iconIdx, setIcon] = useState(0)

    const firstPageTitle = [
        {
            id: '001',
            title: '我的文件',
            path: '/myfile'
        },
        {
            id: '002',
            title: '我的分享',
            path: '/myshare'
        },
        {
            id: '003',
            title: '回收站',
            path: '/recycle'
        }
    ]
    const myDocTitle = [
        {
            id: '01',
            title: '最近',
            icon: 'history'
        },
        {
            id: '02',
            title: '图片',
            icon: 'picture'
        },
        {
            id: '03',
            title: '视频',
            icon: 'playSquare'
        },
        {
            id: '04',
            title: '文档',
            icon: 'fileText'
        },
        {
            id: '05',
            title: '音乐',
            icon: 'customerService'
        }
    ]

    function icon(iconName) {

        const icons = {
            history: <HistoryOutlined />,
            picture: <PictureOutlined />,
            playSquare: <PlaySquareOutlined />,
            fileText: <FileTextOutlined />,
            customerService: <CustomerServiceOutlined />
        }
        return (
            icons[iconName]
        )
    }

    function renderMyDocRow(myDocTitleObj, idx) {
        const myDocTitleStyle = myDocActiveIdx === idx ?
            {
                backgroundColor: 'rgb(198, 229, 241)',
                color: '#08c',
            } : {}
        return (
            <div
                className={`${myDocActiveIdx === idx ? 'check' : ''} mydoc-title-box`}
                style={myDocTitleStyle}>
                <Space style={{ display: 'flex' }}>
                    {icon(myDocTitleObj.icon)}
                    {myDocTitleObj.title}
                </Space>
            </div>
        )
    }


    function renderRow(firstpageItem, idx) {
        const firstpageStyle = activeIdx === idx ? {
            backgroundColor: 'rgb(198, 229, 241)',
            color: '#08c',
            fontWeight: 'bold',
            paddingLeft: idx === 0 ? '0px' : '20px'
        } : { paddingLeft: idx === 0 ? '0px' : '20px' }
        if (idx === 0) {
            return (
                <>
                    <Link to={`/firstpage${firstpageItem.path}/hometown#/index?category=all`}>
                        <div
                            onClick={() => { setMyDocActive(-1); setActive(idx) }}
                            className={`${activeIdx === idx ? 'check' : ''} firstpage-title-box`}
                            style={firstpageStyle}>
                            <Space style={{ display: 'flex' }}>
                                {iconIdx === 0 ?
                                    <CaretRightOutlined onClick={() => { setIcon(1); }} /> :
                                    <CaretDownOutlined onClick={() => { setIcon(0); }} />}
                                {firstpageItem.title}
                            </Space>
                        </div>
                    </Link>
                    <ul className='mydoc-content' style={{ display: iconIdx ? 'block' : 'none' }}>
                        {myDocTitle.map((myDocTitleObj, idx) => {
                            return (

                                <li className='mydoc-title'
                                    onClick={() => { setMyDocActive(idx); setActive(-1) }}
                                    key={myDocTitleObj.id}>
                                    <Link to={`/firstpage${firstpageItem.path}/hometown#/index?category=all`}>
                                        {renderMyDocRow(myDocTitleObj, idx)}
                                    </Link>

                                </li>

                            )
                        })}
                    </ul>
                </>
            )
        }
        else {
            return (
                <Link to={`/firstpage${firstpageItem.path}`}>
                    <div onClick={() => { setMyDocActive(-1); setActive(idx) }} className={`${activeIdx === idx ? 'check' : ''} firstpage-title-box`} style={firstpageStyle}>
                        {firstpageItem.title}
                    </div>
                </Link>

            )
        }
    }

    return (
        <div className='firstpage-container'>
            <ul className='firstpage-content'>
                {
                    firstPageTitle.map((firstPageTitleObj, idx) => {
                        return (
                            <li className='firstpage-title' key={firstPageTitleObj.id}>
                                {renderRow(firstPageTitleObj, idx)}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

