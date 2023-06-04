import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDeliveries } from './../../../../redux/TrackingSlice';
import { Orders } from '../../../../redux/CheckoutSlice';

function OrderList() {
    const dispatch = useDispatch()
    const deliveries = useSelector((state)=>state.tracking.getDelivery)
    const orders = useSelector((state)=>state.checkout.getOrders)
    useEffect(()=>{
        dispatch(getDeliveries())
        dispatch(Orders())
    },[dispatch])
  return (
    <Fragment>
        {orders && orders.data && orders.data.map((item, idx)=>
          <tr className="hover:bg-gray-50">
            <td className="px-6 py-4">{item.first_name + ' ' + item.last_name}</td>
            <td className="px-6 py-4">{item.phone}</td>
            <td className="px-6 py-4">{item.address}</td>
            <td className="px-6 py-4">{item.payment_mode}</td>
            <td className={`px-6 py-4 ${item.status == 'COMPLETED' ? 'text-pink font-semibold': 'text-red-700'}`}>{item.status}</td>
            <td className="px-6 py-4">
              <select className=" bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600">
                  <option value="" className="text-orange-600">Choose Delivery man</option>
                      {(deliveries && deliveries.data) ? deliveries.data.map((item, idx)=>(
                          <option key={idx} value={item.id} className="text-orange-600">
                          {item.firstName + ' ' + item.lastName}
                  </option>
                  )):(<option>No Delivery Avialable</option>)}
              </select>
            </td>
          </tr>
        )}
       
     
      </Fragment>
  )
}

export default OrderList