import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import ResCategory from './ResCategory';

const RestaurantMenu = () => {
    const resId = useParams().resId;
    const resInfo = useRestaurantMenu(resId); 
    const [showIndex, setShowIndex] = useState(0);

    if(resInfo == null){
        return <Shimmer/>
    }
    
    //console.log("INFO", resInfo);
     const {name, cuisines, cloudinaryImageId, costForTwoMessage} 
     = resInfo?.cards[2]?.card?.card?.info

    const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards; 
    //console.log(itemCards);
    const type="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((card)=>{
        return card?.card?.["card"]?.["@type"] === type
    })

    //console.log("CATEGORIES", categories);
    return (  
    <div className='menu text-center'>
        <h2 className='font-bold my-6 text-2xl'> {name}</h2>
        <h2 className='font-bold my-4 text-2lg'>{cuisines.join(',')} - {costForTwoMessage}</h2>

        {
            categories.map((category, index) => {
                return (
                    <ResCategory 
                        key={index} 
                        data={category?.card?.card} 
                        showItems = {index == showIndex} 
                        setShowIndex = { ()=>{ console.log("hello", index); setShowIndex(index)}}
                    />
                )
            })
        }
      
    </div>
  )
}

export default RestaurantMenu
