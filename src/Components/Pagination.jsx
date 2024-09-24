import React from 'react'

function Pagination({fetchPage}) {

    const totalPages = 20

    const pageNumbers = Array.from({length:totalPages},(_,i)=>i+1)

  return (
    <div className='ms-3'>
        <nav aria-label="">
            <div className="pagination pagination-lg">
                {pageNumbers.map((page,index)=>(
                    <div key={index}>
                        <button onClick={()=>fetchPage(page)} className="page-item btn" aria-current="page">{page}</button>
                    </div>
                ))}
            </div>
        </nav>
    </div>
  )
}

export default Pagination