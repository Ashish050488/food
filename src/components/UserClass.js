// Now days we use functional component we don't use class based component but in this about us page i am going use class based component to know how the workd
//this the class based component:it is class which has a render method that return a piece of jsx

import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            count:0,
        };
        //state variable is big object
    };

    render(){
        const {name,location} = this.props
        const{count}=this.state
        return(
            <div className="user-card">
                <h1>count:{count}</h1>
                <button onClick={()=>{
                    //Never updatestate variable directly Never do this
                    this.setState({
                        count :this.state.count+1
                    })
                }}>Count Increase</button>
                <h1>Name:{name}</h1>
                <h2>Location:{location}</h2>
                <h2>Location:@akakaka</h2>
            </div>
        );
    };
};
export default UserClass