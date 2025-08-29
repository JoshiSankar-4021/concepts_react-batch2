/* eslint-disable react/jsx-no-undef */

import { NavLink } from "react-router-dom";
import './Nav.css';

function Nav(){
    return(
        <div>
            <div style={{display:'flex',gap:'10px'}}>
                <NavLink to="/" className="navstyle">HOME</NavLink><br/>
                <NavLink to="/images" className="navstyle">Images</NavLink><br/>
                <NavLink to="/fc" className="navstyle">Functional Component</NavLink><br/>
                <NavLink to="/classcompent" className="navstyle">Class Component</NavLink><br/>
                <NavLink to="/Padding" className="navstyle">Padding</NavLink><br/>
                <NavLink to="/border" className="navstyle">Border</NavLink><br/>
                <NavLink to="/margin" className="navstyle">Margin</NavLink><br/>
                <NavLink to="/card" className="navstyle">CARDS</NavLink><br/>
                <NavLink to="/forms" className="navstyle">FORMS</NavLink><br/>

            </div>
        </div>
    )
}
export default Nav;
