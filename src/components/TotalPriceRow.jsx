import React from 'react'
import './totalPriceRow.css'
import { useSelector } from 'react-redux'

export default function TotalPriceRow() {
  const rows = useSelector((state) => state)
  let totalSum = 0
  rows.map((row) => {
    totalSum += row.quantity * row.priceForOne
    return totalSum
  })
  return <div className="table-totalPrice">Общая стоимость: {totalSum}</div>
}
