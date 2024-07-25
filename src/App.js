import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Header from "./components/Header.js"
import Body from "./components/Body.js";
import About from "./components/About.js";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";
import RestaurantMenu from "./components/RestaurantMenu.js";








const Applayout = ()=>{
    return <div className="app">
        <Header/>
        <Outlet/>
    </div>
};

const AppRouter = createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
               path:"/contact",
               element:<Contact/> 
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    },
    {
        path:"/error",
        element:<Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>);
