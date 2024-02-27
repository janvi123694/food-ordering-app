import React from 'react'; // Make sure to import React
import "@testing-library/jest-dom"
import {fireEvent, render, screen} from "@testing-library/react"
import { Provider } from 'react-redux';
import RestaurantCard from '../RestaurantCard';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
import MOCK_DATA from '../mocks/resCardMock.json'

it("should render res card with props data", () => {
    render(
       <RestaurantCard resData = {MOCK_DATA}/>
       
    )
     const name = screen.getByText(/The Red Box/)
     expect(name).toBeInTheDocument();
})


