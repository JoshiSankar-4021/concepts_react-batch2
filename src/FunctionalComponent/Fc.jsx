import { Link } from "react-router-dom";
function Fc(){
    return(
        <div>
            <style>
                {`
                .secondh1{
                    color:blue;
                    text-align:center
                }
                `}
            </style>
            <h1 style={{color:"red",textAlign:"center"}}>This is Functional Component</h1>
            <h1 className="secondh1">This is Functional Component</h1>
            <h1>This is Functional Component</h1>
            <h1>This is Functional Component</h1>
            <h1>This is Functional Component</h1>
            <h1>This is Functional Component</h1>
            <h1>This is Functional Component</h1>
            <h1>This is Functional Component</h1>
            <h1>This is Functional Component</h1>
            <h1>This is Functional Component</h1>
            <Link to="/">NAVIGATE TO COUNTER APPLICATION</Link>
        </div>
    )
}
export default Fc;