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
          <tr key={idx} className="hover:bg-gray-50">
            <td className="px-6 py-4">{item.first_name + ' ' + item.last_name}</td>
            <td className="px-6 py-4">{item.phone}</td>
            <td className="px-6 py-4">{item.address}</td>
            <td className="px-6 py-4">{item.payment_status}</td>
            <td className={`px-6 py-4 ${item.status == 'COMPLETED' ? 'text-pink font-semibold': 'text-red-700'}`}>{item.status}</td>
            <td className="px-6 py-4">{item.delevery_status}</td>
          </tr>
    )}    
      </Fragment>
  )
}

export default OrderList