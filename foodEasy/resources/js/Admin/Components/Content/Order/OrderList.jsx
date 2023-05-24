import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDeliveries } from './../../../../redux/TrackingSlice';

function OrderList() {
    const dispatch = useDispatch()
    const deliveries = useSelector((state)=>state.tracking.getDelivery)
    useEffect(()=>{
        dispatch(getDeliveries())
    },[dispatch])
  return (
    <Fragment>
    {/* {Array.isArray(data?.data) ? (
        data.data.map((item, idx )=> */}
        <tr className="hover:bg-gray-50">
        <td className="px-6 py-4">
          <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
            <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
           dfgdsfg
          </span>
        </td>
        <td className="px-6 py-4">last name</td>
        <td className="px-6 py-4">email</td>
        <td className="px-6 py-4">phone</td>
        <td className="px-6 py-4">address</td>
        <td className="px-6 py-4">
        <select className=" bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600">
                <option value="" className="text-orange-600">Choose Delivery man</option>
                    <option className="text-orange-600">
                    pending
                    </option>
            </select>
        </td>
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
      {/* )) : (<tr><td>isLoding</td></tr>)} */}
      </Fragment>
  )
}

export default OrderList