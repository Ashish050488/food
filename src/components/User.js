// Now days we use functional component we don't use class based component but in this about us page i am going use class based component to know how the workd
//this the functional component :Its a function that return a piece of jsx


const User = ({name})=>{
    return(
        <div className="user-card">
            <h1>Name:{name}</h1>
            <h2>Location:Bhopal</h2>
            <h2>Location:@akakaka</h2>
        </div>
    );
};

export default User