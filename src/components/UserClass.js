// Now days we use functional component we don't use class based component but in this about us page i am going use class based component to know how the workd
//this the class based component:it is class which has a render method that return a piece of jsx

import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="user-card">
                <h1>Name:{this.props.name}</h1>
                <h2>Location:Bhopal</h2>
                <h2>Location:@akakaka</h2>
            </div>
        );
    };
};
export default UserClass