import React from "react";
import { ReactDOM } from "react";
import { CDN_URL } from "../utils/constants";

export default RestaurantCard=(props)=>{
    const {resData} = props;
    const {name, cuisines, cloudinaryImageId, avgRating, costForTwo} = resData?.info;
    const {deliveryTime} = resData?.info?.sla;

   return (
    <div className="res-card" style={{background:"#f0f0f0"}}>
        <img className='logo' src={`${CDN_URL}/${cloudinaryImageId}`}/>
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime}</h4>
        <h4>{`${avgRating} stars`}</h4>
    </div>
   )
}
