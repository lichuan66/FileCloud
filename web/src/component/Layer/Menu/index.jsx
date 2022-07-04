import React, { useState } from 'react'
import './index.less'
import {
    AntCloudOutlined,
    SwapOutlined,
    WechatOutlined
} from '@ant-design/icons';
import { Space } from 'antd';
import { Link } from 'react-router-dom'

export default function Menu() {


    const [activeIdx, setActive] = useState(0)

    const menuTitle = [
        {
            id: '001',
            title: '首页',
            icon: 'antCloud',
            path: '/firstpage/myfile/hometown#/index?category=all'
        },
        {
            id: '002',
            title: '传输',
            icon: 'swap',
            path: '/transform'
        },
        {
            id: '003',
            title: '好友',
            icon: 'wechat',
            path: '/'
        }
    ];

    const defaultIconStyle = {
        fontSize: '28px',
    }
    function renderRow(menuItem, idx) {
        const iconStyle = idx === activeIdx ? {
            color: '#08c',
            fontWeight: 'bold'
        } : {}
        return (
            <Link to={menuItem.path}>
                <div className='menu-title-box' onClick={() => setActive(idx)} style={{ ...iconStyle }}>
                    <Space style={{ display: 'flex', flexDirection: 'column', rowGap: '0px 0px 0px 0px' }}>
                        <Icon iconName={menuItem.icon} style={{ ...defaultIconStyle }} />
                        {
                            menuItem.title
                        }
                    </Space>
                </div>
            </Link>
        )
    }


    return (
        <div className='menu-container'>
            <ul className='menu-content'>
                {
                    menuTitle.map((menuTitieObj, idx) => {
                        return (
                            <li className='menu-title' key={menuTitieObj.id}>
                                <div className={`${activeIdx === idx ? 'check' : ''} menu-title-border`} >

                                    {renderRow(menuTitieObj, idx)}

                                </div>
                            </li>

                        )
                    })
                }
            </ul>
        </div>
    )
}


function Icon({ iconName, ...props }) {

    const icons = {
        antCloud: <AntCloudOutlined {...props} />,
        wechat: <WechatOutlined {...props} />,
        swap: <SwapOutlined {...props} />
    }
    return icons[iconName];
}