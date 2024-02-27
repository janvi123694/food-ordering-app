import React from 'react'; // Make sure to import React
import "@testing-library/jest-dom"
import {fireEvent, render, screen} from "@testing-library/react"
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
import MOCK_DATA from '../mocks/mockResMenu.json'
import {act} from 'react-dom/test-utils'
import RestaurantMenu from '../RestaurantMenu';
import Header from '../Header'
import Cart from '../Cart'

global.fetch = jest.fn(()=>{
   return Promise.resolve({
      json : () =>{
         return Promise.resolve(MOCK_DATA)
      }
   })
})

it("should load res menu component", async() => {
    const body = await act(async () =>
         render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
               <RestaurantMenu/>
               <Cart/>
               </Provider>
            </BrowserRouter>
            
         )
      )

      //click on a accordian header
   
    const accordianHeader = screen.getByText(/Recommended/)

    fireEvent.click(accordianHeader)
        
    const foodItems = screen.getAllByTestId('food-items');
    expect(foodItems.length).toBe(12);

    //add to cart
    const addBtns = screen.getAllByRole('button', { name: /Add \+/i });
    //console.log(addBtns);
    fireEvent.click(addBtns[0])

    //expect(screen.getByText(/Cart(1items)/)).toBeInTheDocument();
     const foodItems2 = screen.getAllByTestId('food-items');
     expect(foodItems2.length).toBe(13); // 12 frm res menu 1 feom cart

     fireEvent.click( screen.getByTestId('clear-cart'))
     const foodItems3 = screen.getAllByTestId('food-items');
     expect(foodItems3.length).toBe(12); // 12 frm res menu 1 feom cart
    
})



