// Now days we use functional component we don't use class based component but in this about us page i am going use class based component to know how the workd
//this the class based component:it is class which has a render method that return a piece of jsx

import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            userInfo:{
                name:"Jhon Doe",
                location:"Default"
            },
        };
    };
    async componentDidMount(){
        const data =  await fetch("https://api.github.com/users/ashish050488");
        const json = await data.json()
        this.setState({
            userInfo:json,
        })
        console.log(json);
    };
    
    
    render(){
        const {name,location,avatar_url} = this.state.userInfo
        return(
            <div className="user-card">
               
                <img src={avatar_url} />
                <h1>Name:{name}</h1>
                <h2>Location:{location}</h2>
            </div>
        );
    };
};
export default UserClass;

/* In Class Based Component
   -Never updatestate variable directly Never do this
   -State variable is big object
   -This is used for calling Api as it is called after the DOM is updated

*/

/** 
 * ---Mounting---
 * 
 * Constructor(Dummy)
 * Render(dummy)
 *      <HTML dummy>
 * ComponentDidMount
 *      <API Call>
 *      <This.setState> -->Set variable is updated
 * 
 * ----UPDATE
 *  
 *      render(API data)
 *      <HTML new API data>
 * 
 * ComponentDidUpdate
 * 
 * 
 * Never ever compare react lifeCycle method to functional component
 * 
 * 
*/

