import React from 'react'; // Make sure to import React
import "@testing-library/jest-dom"
import {fireEvent, render, screen} from "@testing-library/react"
import { Provider } from 'react-redux';
import Header from '../Header';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
it("should render header with login button", () => {
    render(
        <BrowserRouter>
             <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
       
    )
    const loginBtn = screen.getByRole('button', {name : 'Login'})
    expect(loginBtn).toBeInTheDocument();
})


it("should change login btn to logout on click", () => {
    render(
        <BrowserRouter>
             <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
       
    )
    const loginBtn = screen.getByRole('button', {name : 'Login'})
    fireEvent.click(loginBtn)
    const logoutBtn = screen.getByRole('button', {name : 'Logout'})
    expect(logoutBtn).toBeInTheDocument();
})