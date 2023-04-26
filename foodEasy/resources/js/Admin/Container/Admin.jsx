import React from 'react'
import Content from '../Content'
import SideBar from '../Components/Layouts/SideBar'
import NavBar from '../Components/Layouts/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Category from '../Content/Category'
import Product from '../Content/Product'
import Dashboard from '../Content/Dashboard'
import Order from '../Content/Order'
import Customer from '../Content/Customers'
import Transaction from '../Content/Transaction'


function Admin() {
 
  return (
    <div className='admin h-screen  w-full'>
    <div>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path='/' exact element={<Dashboard />} />
          <Route path='/categories' exact element={<Category />} />
          <Route path='/products' exact element={<Product />} />
          <Route path='/orders' exact element={<Order />} />
          <Route path='/customers' exact element={<Customer />} />
          <Route path='/Transactions' exact element={<Transaction />} />
        </Routes>
      </BrowserRouter>
    </div>
       <div>
        <NavBar />
        {/* <Content /> */}
       </div> 
    </div>
  )
}

export default Admin