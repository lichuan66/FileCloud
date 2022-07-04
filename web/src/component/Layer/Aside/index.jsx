import React from 'react'
// import { Navigate } from 'react-router-dom'
import './index.less'
import { Routes, Route, Navigate } from 'react-router-dom'
import FirstPage from './FirstPage'
import Transform from './Transform'

export default function Aside() {

    return (
        <div className='aside-container'>
            <Routes>
                <Route path='/firstpage/*' element={<FirstPage />} />
                <Route path='/transform/*' element={<Transform />} />
                {/* <Route path='*' element={<Navigate to="/firstpage/myfile/hometown#/index?category=all" />} /> */}
                <Route path='/' element={<Navigate to="/firstpage/myfile/hometown#/index?category=all" />} />
            </Routes>
        </div>
    )
}
