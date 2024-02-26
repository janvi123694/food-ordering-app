import React from "react";
import { ReactDOM } from "react";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export default RestaurantCard=(props)=>{
    const {resData} = props;
    const {name, cuisines, cloudinaryImageId, avgRating, costForTwo, id} = resData?.info;
    const {deliveryTime} = resData?.info?.sla;

   return (
    <div className="res-card m-4 p-4 w-[300px] h-96 rounded-lg bg-gray-50 hover:bg-gray-100">
        <img className='logo h-[200px] w-[300px]' src={`${CDN_URL}/${cloudinaryImageId}`}/>
        <h3 className="font-bold text-xl font-san-serif">{name}</h3>
        <h4 className="font-san-serif text-sm m-1">{cuisines.join(",")}</h4>
        <h4 className="font-san-serif text-sm m-1">{costForTwo}</h4>
        <h4 className="font-san-san-serif text-sm m-1">{deliveryTime}</h4>
        <h4 className="font-san-serif text-sm">{`${avgRating} stars`}</h4>
    </div>
   )
}

export const withPromotedLabel = (RestaurantCard)=>{
    return (props)=>{
        return (
            <div>
                 <label className="absolute bg-black text-white m-2 p-2 rounded-lg"> Promoted </label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}
