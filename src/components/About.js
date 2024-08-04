// Now days we use functional component we don't use class based component but in this about us page i am going use class based component to know how the workd

import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// In below line React.component can be destructure on the fly while importing react like  import {React} from "react";
class About extends React.Component{

    constructor(props){
        super(props)
        console.log("Parent Constructor");
    };
    

    componentDidMount(){


      console.log("Parent COmponentDidMount");
    }

    render(){
        console.log("Parent Render");
        return(
            <div>
                <h1>About Us</h1>
                <h2>This is me</h2>
                {/*<User name={"Ashish (from function)"} /> } {/*this is functional*/}
                <UserClass  />
            </div>
        )
    }


};

export default About;

/*
-Parent Constructor
-Parent Render


    -First constructor
    -Forset Render

    -Second constructor
    -Second Render

    <DOM UPDATED IN SINGLE BATCH>

    -First ComponentDidMount
    -Second ComponentDidMount

-Parent ComponentDidMount


-There is another method which is called after Parent ComponentDidMount which is ComponentDidUpdate

*/
