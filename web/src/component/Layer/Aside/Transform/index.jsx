import React, { useState } from 'react'
import './index.less'
import {
    VerticalAlignBottomOutlined,
    VerticalAlignTopOutlined,
    CheckCircleOutlined
} from '@ant-design/icons';
import { Space } from 'antd';

export default function Transform() {

    const [activeIdx, setActive] = useState(0)

    const transformTitle = [
        {
            id: '001',
            title: '正在下载',
            icon: 'verticalAlignBottom'
        },
        {
            id: '002',
            title: '正在上传',
            icon: 'verticalAlignTop'
        },
        {
            id: '003',
            title: '传输完成',
            icon: 'checkCircle'
        }
    ]

    function renderRow(transformTitleObj, idx) {
        const transformStyle = activeIdx === idx ?
            {
                backgroundColor: 'rgb(198, 229, 241)',
                color: '#08c',
                fontWeight: 'bold'
            } : {}
        return (
            <div
                onClick={() => { setActive(idx) }}
                className={`${activeIdx === idx ? 'check' : ''} transform-title-box`}
                style={transformStyle}>
                <Space style={{ display: 'flex' }}>
                    {icon(transformTitleObj.icon)}
                    {transformTitleObj.title}
                </Space>
            </div>
        )
    }

    function icon(iconName) {
        const icons = {
            verticalAlignBottom: <VerticalAlignBottomOutlined />,
            verticalAlignTop: <VerticalAlignTopOutlined />,
            checkCircle: <CheckCircleOutlined />
        }
        return icons[iconName]
    }

    return (
        <div className='transform-container'>
            <ul className='transform-content'>
                {
                    transformTitle.map((transformTitleObj, idx) => {
                        return (
                            <li className='transform-title' key={transformTitleObj.id}>
                                {renderRow(transformTitleObj, idx)}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
