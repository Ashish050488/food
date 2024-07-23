import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Header from "./components/Header.js"
import Body from "./components/Body.js";
import About from "./components/About.js";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";








const Applayout = ()=>{
    return <div className="app">
        <Header/>
        <Body/>
    </div>
};

const AppRouter = createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        errorElement:<Error/>
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
        path:"/error",
        element:<Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>);
