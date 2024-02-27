import React from 'react'
import { CDN_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
const ItemList = ({items}) => {
    console.log("ITEMS", items);
  const dispatch = useDispatch()
  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }
  return (
    <div>
      {
        items.map((item) => {
            return (
                <div data-testid="food-items">
                    {
                        <div key={item.card.info.id} className='p-2 m-2 border-b-2 border-gray-200 flex justify-between'>
                           
                           <div className='w-9/12'>
                                <div className='text-left py-2'>
                                        <span>  { item.card.info.name } </span>
                                        <span>  { item.card.info.price/100  || item.card.info.defaultPrice/100  } </span>
                                </div>
                                <p className='text-xs'> { item.card.info.description} </p>
                           </div>
                           <div className='w-3/12 p-4'>
                               <div className="">

                                    <button 
                                      className='size-15 text-sm bg-black text-white p-2 shadow-lg rounded-lg'
                                      onClick={() => handleAddItem(item)}
                                      > 
                                      Add + 
                                    </button>
                                    <img src={`${CDN_URL}/${item.card.info.imageId}`} alt="" className='w-24'/>
                               </div>
                            </div>
                        </div>
                    }
                </div>
            )
        })
      }
    </div>
  )
}

export default ItemList
