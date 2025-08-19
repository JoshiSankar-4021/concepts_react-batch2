import React from "react";
import { NavLink } from "react-router-dom";

class Cc extends React.Component{
    render(){
        return(
            <div>
                <h1>This is class component</h1>
                <NavLink to="/fc">Fucntional Component</NavLink>
            </div>
        )
    }
}

export default Cc;