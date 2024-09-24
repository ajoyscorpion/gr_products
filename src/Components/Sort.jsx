import React from 'react'

function Sort({setSort}) {

  return (
    <div>
        <select onChange={(e) => setSort(e.target.value)}>
            <option value="">Sort by</option>
            <option value="name_asc">Name (A-Z)</option>
            <option value="name_desc">Name (Z-A)</option>
            <option value="nutrition_asc">Nutrition Grade (Asc)</option>
            <option value="nutrition_desc">Nutrition Grade (Desc)</option>
        </select>
    </div>
  )
}

export default Sort