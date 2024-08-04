import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Header from "./components/Header.js"
import Body from "./components/Body.js";
// import About from "./components/About.js";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
// import Grocery from "./components/Grocery.js"


/**
 * Chunking 
 * Code Splitting
 * Dynamic BUndling
 * Lazy Loading
 * On Demand Loading
*/

const Grocery = lazy(()=> import("./components/Grocery.js"));

const About = lazy(()=> import("./components/About.js"))






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
                element:(
                    <Suspense><About/></Suspense>
                ),
            },
            {
               path:"/contact",
               element:<Contact/> 
            },
            {
               path:"/grocery",
               element:(<Suspense><Grocery/></Suspense>)
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
