import './Forms.css';
import { useState } from 'react';
function Forms(){

    const [submitteddata, setsubmitteddata]=useState({
        name:'',
        pwd:''
    })
    
    const [formdata,setformdata]=useState({
        fullname:'',
        password:''
    })

    const handlechanges=(e)=>{
        const{name,value}=e.target;
        setformdata({
            ...formdata,
            [name]:value
        })
    }

    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(formdata);
        setsubmitteddata({
            name:formdata.fullname,
            pwd:formdata.password
        }
        )
    }
    return(
        <div>
            <h1>FORMS</h1>
            <div className='formdiv'>
            <form>
                <lable className="lablestyle">Name</lable>
                <input type="text" className="inputstyle" name="fullname" value={formdata.fullname} onChange={handlechanges}/>
                <lable className="lablestyle">Password</lable>
                <input type="password" className="inputstyle" name="password" value={formdata.password} onChange={handlechanges}/>
                <button className="buttonstyle" onClick={handlesubmit}>SIGNUP</button>
                <h1>{submitteddata.name}</h1>
                <h1>{submitteddata.pwd}</h1>
            </form>
            </div>
        </div>
    );
}
export default Forms;