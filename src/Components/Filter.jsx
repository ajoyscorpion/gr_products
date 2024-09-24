import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getCategories } from '../Services/api'

function Filter({setFilter}) {

    const [categories,setCategories] = useState([])

    useEffect(() => {
        handleCategories()
    }, [])
    

    const handleCategories = async() => {
        const response = await getCategories()
        console.log(response.data.tags);
        setCategories(response.data.tags)
    }

  return (
    <div>
        <select onChange={(e) => setFilter(e.target.value)}>
            <option value="">Select Category</option>
            {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
        </select>
    </div>
  )
}

export default Filter