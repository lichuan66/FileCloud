import React from 'react'
import MyFile from '../../Content/MyFile';
import './index.less'
import { Routes, Route } from 'react-router-dom'

export default function Content() {
    return (
        <div className='content-container'>
            <Routes>
                {/* <Route path='/' element={<MyFile />} /> */}
                <Route path="/firstpage/myfile/hometown" element={<MyFile />} />
                <Route path="/firstpage/myfile/*" element={<MyFile />} />
            </Routes>
        </div>
    )
}
