import React from 'react'


export default function TodoFilter({ filter, setFilter, activeCount }) {
return (
<div className="filters">
<div className="left">Sisa: <strong>{activeCount}</strong></div>
<div className="right">
<button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>Semua</button>
<button className={`filter-btn ${filter === 'active' ? 'active' : ''}`} onClick={() => setFilter('active')}>Aktif</button>
<button className={`filter-btn ${filter === 'completed' ? 'active' : ''}`} onClick={() => setFilter('completed')}>Selesai</button>
</div>
</div>
)
}