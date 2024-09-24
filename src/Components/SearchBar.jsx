import React from 'react'
import { useState } from 'react'

function SearchBar({ Search }) {

    const [searchItem,setSearchItem] = useState('')
    console.log(searchItem);
    
    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchItem(value)
        Search(value) 
    }

  return (
    <div>
        <input 
            type="text" 
            //class="form-control" 
            id="serachInput" 
            placeholder="Search The Product"
            onChange={handleInputChange}
        />
    </div>
  )
}

export default SearchBar