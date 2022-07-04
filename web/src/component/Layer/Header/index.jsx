import React from 'react'
import './index.less'

export default function Header() {
    return (
        <div className='header-container'>
            <div className='wrap'>
                <div className='wrap-icon'>
                    FileCloud
                </div>
                <div className='item'>
                    标题1
                </div>
                <div className='item'>
                    标题2
                </div>
                <div className='item'>
                    退出
                </div>
            </div>
        </div>
    )
}
