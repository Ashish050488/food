// Now days we use functional component we don't use class based component but in this about us page i am going use class based component to know how the workd
//this the functional component :Its a function that return a piece of jsx

import { useState } from "react";


const User = ({name})=>{
    const [count] = useState(0)
    const [count2] = useState(2)
    // here we can make many useState as we want but behind the scene react uses big object to maintain these variable


    return(
        <div className="user-card">
            <h1>count:{count}</h1>
            <h1>count2:{count2}</h1>
            <h1>Name:{name}</h1>
            <h2>Location:Bhopal</h2>
            <h2>Location:@akakaka</h2>
        </div>
    );
};

export default User