import './Forms.css';
function Forms(){
    return(
        <div>
            <h1>FORMS</h1>
            <div className='formdiv'>
            <form>
                <lable className="lablestyle">Name</lable>
                <input type="text" className="inputstyle"/>
                <lable className="lablestyle">Password</lable>
                <input type="password" className="inputstyle"/>
                <button className="buttonstyle">SIGNUP</button>
            </form>
            </div>
        </div>
    );
}
export default Forms;