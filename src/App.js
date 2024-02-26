import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header'
import Body from './components/Body'
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { BrowserRouter, createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/useContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {
    const [userInfo, setUserInfo] = useState("default")

    useEffect(() => {
      // make an api call to get auth data
      const data = {
        name : "akshay saini"
      }
      setUserInfo(data.name);
    }, []); 


    return (
      <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser:userInfo,  setUserInfo}}>
        <div className="app">
      
          <Header/>
          <Outlet/> 
        </div>
      </UserContext.Provider>
      </Provider>
    )
}

const Grocery = lazy(() => import('./components/Grocery'));

const appRouter = createBrowserRouter([
  {
    path:'/', 
    element : <AppLayout/>, 
    children : [
      {
        path : '/', 
        element : <Body/>
      },
      {
        path : '/about', 
        element : <About/>
      },
      {
        path : '/contact', 
        element : <Contact/>
      },
      {
        path : '/cart', 
        element : <Cart/>
      },
      {
        path : '/grocery', 
        element : (
          <Suspense fallback={<Shimmer/>}>
            <Grocery/>
          </Suspense>
        )
      },
      {
        path : '/restaurants/:resId', 
        element : <RestaurantMenu/>
      }
    ], 
    errorElement : <Error/>
  }, 

])

ReactDOM.createRoot(
    document.getElementById("root"),
  )
  .render(
    <React.StrictMode>
      <RouterProvider router={appRouter} />
    </React.StrictMode>,
  );