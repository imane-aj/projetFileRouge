import React from 'react';
import OrderList from './OrderList';

function Order() {
 
  return (
    <div className="absolute md:left-96 md:right-10 md:top-40 left-28 top-44">
      <div className="rounded-lg border border-gray-200 shadow-md ">
        <table className="w-full border-collapse overflow-auto bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Full Name</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Phone</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Address</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Payment Status</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Delivey Status</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              <OrderList/>
          </tbody>
        </table>  
      </div>
    </div>
  )
}

export default Order