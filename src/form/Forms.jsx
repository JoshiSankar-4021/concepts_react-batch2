import './Forms.css';
import { useState } from 'react';

function Forms() {
const [submitteddata, setsubmitteddata] = useState({
name: '',
email: '',
pwd: ''
});

const [formdata, setformdata] = useState({
name: '',
email: '',
password: ''
});

const handlechanges = (e) => {
const { name, value } = e.target;
setformdata({
    ...formdata,
    [name]: value
});
};

const handlesubmit = async (e) => {
e.preventDefault();
console.log("Form data:", formdata);

try {
    const res = await fetch("http://localhost:3000/api/test?action=adduser", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        name:formdata.name,
        email:formdata.email,
        password:formdata.password
    })
    });

    const data = await res.json();
    console.log("Server response:", data);

    // Save submitted data to state
    setsubmitteddata({
    name: formdata.name,
    email: formdata.email,
    pwd: formdata.password
    });
} catch (err) {
    console.error("Error submitting form:", err);
}
};

return (
<div>
    <h1>FORMS</h1>
    <div className="formdiv">
    <form onSubmit={handlesubmit}>
        <label className="lablestyle">Name</label>
        <input
        type="text"
        className="inputstyle"
        name="name"
        value={formdata.name}
        onChange={handlechanges}
        />

        <label className="lablestyle">Email</label>
        <input
        type="email"
        className="inputstyle"
        name="email"
        value={formdata.email}
        onChange={handlechanges}
        />

        <label className="lablestyle">Password</label>
        <input
        type="password"
        className="inputstyle"
        name="password"
        value={formdata.password}
        onChange={handlechanges}
        />

        <button type="submit" className="buttonstyle">SIGNUP</button>
    </form>

    {/* Show submitted data */}
    {submitteddata.name && (
        <div className="submitted-info">
        <h3>Submitted Data:</h3>
        <p>Name: {submitteddata.name}</p>
        <p>Email: {submitteddata.email}</p>
        <p>Password: {submitteddata.pwd}</p>
        </div>
    )}
    </div>
</div>
);
}

export default Forms;
