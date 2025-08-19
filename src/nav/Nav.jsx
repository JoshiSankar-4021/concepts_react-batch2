
import { NavLink } from "react-router-dom";

function Nav(){
    return(
        <div>
            <NavLink to="/">HOME</NavLink><br/>
            <NavLink to="/images">Images</NavLink><br/>
            <NavLink to="/fc">Functional Component</NavLink><br/>
            <NavLink to="/classcompent">Class Component</NavLink><br/>
        </div>
    )
}
export default Nav;
