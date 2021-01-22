import React from "react";
import './table.css'
import { useDispatch } from 'react-redux'
import editPrice from '../actions/editPrice'
import editQuantity from '../actions/editQuantity'
import PropTypes from 'prop-types'

export default function Table({ rows }) {
  const dispatch = useDispatch();

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Название</th>
            <th>Количество</th>
            <th>Цена за 1</th>
            <th>Цена (total)</th>

          </tr>
        </thead>
        <tbody>

          <td>
            {rows.map((row) => (
              <tr>{row.name}</tr>
            ))}
          </td>
          <td>
            {rows.map((row) => (
              <tr className='tr'
                onClick={() =>
                  dispatch(editQuantity(row.id, prompt('Введите значение')))
                } >{row.quantity}</tr>
            ))}
          </td>
          <td>
            {rows.map((row) => (
              <tr className='tr'
                onClick={() =>
                  dispatch(editPrice(row.id, prompt('Введите значение')))
                } >{row.priceForOne}</tr>
            ))}
          </td>
          <td>
            {rows.map((row) => (
              <tr>{row.priceForOne * row.quantity}</tr>
            ))}

          </td>
        </tbody>
      </table>
    </div >

  );
}

Table.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object),
}

