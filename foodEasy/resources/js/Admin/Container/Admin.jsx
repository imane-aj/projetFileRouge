import React from 'react'
import Content from '../Content'
import SideBar from '../Layouts/SideBar'

function Admin() {
  return (
    <div className='admin h-screen overflow-x-hidden flex flex-row'>
    <div>
    <SideBar/>
    </div>
       <div>
        <Content />
       </div> 
    </div>
  )
}

export default Admin