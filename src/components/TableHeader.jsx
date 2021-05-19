import React from 'react'
import './TableHeader.css'

export default function TableHeader() {
  return (
    <div className="table-header">
      <div className="table-header-col">Название</div>
      <div className="table-header-col">Количество</div>
      <div className="table-header-col">Цена за 1</div>
      <div className="table-header-col">Цена (total)</div>
    </div>
  )
}
