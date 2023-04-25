import React from 'react'
import Content from '../Content'
import SideBar from '../Components/Layouts/SideBar'

function Admin() {
 
  return (
    <div className='admin h-screen  w-full'>
    <div>
    <SideBar />
    </div>
       <div>
        <Content />
       </div> 
    </div>
  )
}

export default Admin