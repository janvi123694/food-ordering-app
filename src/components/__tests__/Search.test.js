import React from 'react'; // Make sure to import React
import "@testing-library/jest-dom"
import {fireEvent, render, screen} from "@testing-library/react"
import { Provider } from 'react-redux';
import RestaurantCard from '../RestaurantCard';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
import Body from '../Body'
import MOCK_DATA from '../mocks/mockResListData.json'
import {act} from 'react-dom/test-utils'

import { waitFor } from '@testing-library/react';

global.fetch = jest.fn(()=>{
   return Promise.resolve({
      json : () =>{
         return Promise.resolve(MOCK_DATA)
      }
   })
})

it("should search list for burger input", async() => {
    const body = await act(async () =>
         render(
            <BrowserRouter>
                <Provider store={appStore}>

               <Body/>
               </Provider>
            </BrowserRouter>
            
         )
      )
   
      const searchBtn = screen.getByTestId('searchBtn')

      const searchInput = screen.getByTestId('searchInput'); 

      fireEvent.change(searchInput, {
         target: {
           value: "Pizza Hut",
         },
       });

     fireEvent.click(searchBtn)

    const resCards = screen.getAllByTestId('res-card');
    expect(resCards.length).toBe(1);
})


it("top rated res", async() => {
   const body = await act(async () =>
        render(
           <BrowserRouter>
               <Provider store={appStore}>

              <Body/>
              </Provider>
           </BrowserRouter>
           
        )
     )
  
   const topRatedRestaurantsBtn = screen.getByTestId('topRatedRestaurantsBtn')

   fireEvent.click(topRatedRestaurantsBtn)

   const resCards = screen.getAllByTestId('res-card');
   expect(resCards.length).toBe(6)
})

