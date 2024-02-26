import React, { useState } from 'react'
import ItemList from './ItemList';

const ResCategory = (props) => {
    const {data, showItems, setShowIndex} = props; 
    
   const handleClick = () => {
     setShowIndex(); 
   }
    // console.log(data);
  return (
    <div>
        <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer' onClick={handleClick} >
            <div className='flex justify-between'>
                <span className='font-bold text-lg'>
                    {data.title} ({data.itemCards.length})
                </span>
                <span> ^</span>
            </div>
            {showItems && <ItemList items={data.itemCards}/>}
        </div>
      
    </div>
  )
}

export default ResCategory
