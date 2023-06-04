import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { OrderVol } from '../../../../redux/StatisticSlice';
import OrderVolumeChart from './OrderVolumeChart';

function Dashboard() {
  return (
    <div className="absolute md:left-96 md:right-10 md:top-40 left-28 top-44">
      <OrderVolumeChart />
    </div>
  )
}

export default Dashboard