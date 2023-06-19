import React, { useEffect } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList
} from "recharts";
import { useDispatch, useSelector } from 'react-redux';
import { OrderVol } from '../../../../redux/StatisticSlice';

export default function OrderVolumeChart() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(OrderVol());
  }, []);
  
  const orderV = useSelector((state)=> state.statistic.orderV)
  const orderVolumes = orderV.data;
  const daysInMonth = Array.from({ length: 31 }, (_, index) => index + 1); // Array of days from 1 to 31

  const maxOrderCount = Math.max(...Object.values(orderVolumes || {})) ; // Find the maximum order count
  const data = daysInMonth.map((day) => {
    const order_count = orderVolumes ? orderVolumes[`2023-06-${day.toString().padStart(2, '0')}`] || 0 : 0;
    const percentage = (order_count / maxOrderCount) * 100; // Calculate the percentage

    return {
      name: day.toString(),
      order_count: order_count,
      percentage: percentage,
    };
  });

  return (
    <div>
    <BarChart
    width={500}
    height={300}
    data={data}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
    barSize={20}
  >
    <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
    <YAxis tickFormatter={(value) => `${value}%`} domain={[0, 100]} />
    <Tooltip />
    <Legend />
    <CartesianGrid strokeDasharray="3 3" />
    <Bar dataKey="percentage" fill="#637d36" background={{ fill: '#eee' }} >
      <LabelList dataKey="order_count" position={`${'order_count' == 0 ? 'top' : 'center' }`} fill="white" />
    </Bar>
    </BarChart>
  </div>
  )
}
