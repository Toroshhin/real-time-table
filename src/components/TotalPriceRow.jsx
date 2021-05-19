import React from 'react'
import PropTypes from 'prop-types'
import './TotalPriceRow.css'

export default function TotalPriceRow({ rows }) {
  let totalSum = 0
  rows.map((row) => {
    totalSum += row.quantity * row.priceForOne
    return totalSum
  })
  return <div className="table-totalPrice">Общая стоимость: {totalSum}</div>
}

TotalPriceRow.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object),
}
