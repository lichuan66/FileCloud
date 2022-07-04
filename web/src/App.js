import React from 'react'
import './App.less'
import Header from './component/Layer/Header'
import Aside from './component/Layer/Aside'
import Content from './component/Layer/Content'
import Menu from './component/Layer/Menu'

export default function App() {
  return (
    <div className='layer'>
      <div className='layer-header'>
        <Header />
      </div>
      <div className='layer-nonHeader'>
        <div className='layer-menu'>
          <Menu />
        </div>
        <div className='layer-aside'>
          <Aside />
        </div>
        <div className='layer-content'>
          <Content />
        </div>
      </div>
    </div>
  )
}
