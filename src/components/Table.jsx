import React from 'react'
import './table.css'
import { useDispatch } from 'react-redux'
import editPrice from '../actions/editPrice'
import editQuantity from '../actions/editQuantity'
import PropTypes from 'prop-types'
import TotalPriceRow from './TotalPriceRow'

export default function Table({ rows }) {
  const dispatch = useDispatch()

  return (
    <div className='table'>
      <div className='table-head'>
        <div className='cell-head'>Название</div>
        <div className='cell-head'>Количество</div>
        <div className='cell-head'>Цена за 1</div>
        <div className='cell-head'>Цена (total)</div>
      </div>

      <div className='table-body'>
        <div className='cell-body'>
          {rows.map(row => (
            <div className='cell'>{row.name}</div>
          ))}
        </div>

        <div className='cell-body'>
          {rows.map(row => (
            <div className='cell' onClick={() => dispatch(editQuantity(row.id, prompt('Введите значение')))}>
              {row.quantity}
            </div>
          ))}
        </div>

        <div className='cell-body'>
          {rows.map(row => (
            <div className='cell' onClick={() => dispatch(editPrice(row.id, prompt('Введите значение')))}>
              {row.priceForOne}
            </div>
          ))}
        </div>

        <div className='cell-body'>
          {rows.map(row => (
            <div className='cell'>{row.priceForOne * row.quantity}</div>
          ))}
        </div>
      </div>

      <TotalPriceRow />
    </div>
  )
}

Table.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object),
}
