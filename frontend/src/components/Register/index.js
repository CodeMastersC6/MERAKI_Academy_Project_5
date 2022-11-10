import React, { useContext, useState } from "react";
import "./style.css";
import axios from "axios";
import Navbar_b_token from "../Navbar_b_token/indes";
import Footer from "../Footer";


// =================================================================

const Register = () => {
//   const { isLoggedIn } = useContext(AuthContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Location, setLocation] = useState("");
  const [mobile, setMobile] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const role_id = 1;
  //create state message to show err in request on client side
  const [message, setMessage] = useState("");
  ////create state message to show result in request on client side
  const [message1, setMessage1] = useState("");
  //create state "status" to show message or message1
  const [status, setStatus] = useState(false);

  // =================================================================

  const addNewUser =  () => {
    
       axios.post("http://localhost:5000/register", {
        firstName,
        lastName,
        Location,
        mobile,
        email,
        password,
        role_id,
      })
      .then((result)=>{
        console.log(result)
        setMessage1(result.data.massage)
        //  {localStorage.setItem("firstName",result.data.result.firstname)}
        setStatus(false)
      })
      .catch((err)=>{
        setStatus(true)
        setMessage(err.response.data.massage)
        console.log(message)
        console.log(err)
      })
      
  };

  // =================================================================

  return (
    <>
    <Navbar_b_token/>
      <div className="Form">
      <p className="Title">Create Account</p>
      <p>Please register below account detail</p>
            <form >
              <br />
              <label>first Name</label><br></br>
              <input className="input_register"
                type="text"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <br />
              <label>last Name</label><br></br>
              <input className="input_register"
                type="text"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
              <br />
              <label>your Location</label><br></br>
              {/* <input className="input_register"
                type="test"
                placeholder="locaion"
                onChange={(e) => setLocation(e.target.value)}
              /> */}
              <select id="city" name="city">
    <option value="">Select City</option>
    <option value="Al Jīzah">Al Jīzah</option>
    <option value="Al Jubayhah">Al Jubayhah</option>
    <option value="Amman">Amman</option>
    <option value="Ḩayy al Bunayyāt">Ḩayy al Bunayyāt</option>
    <option value="Ḩayy al Quwaysimah">Ḩayy al Quwaysimah</option>
    <option value="Jāwā">Jāwā</option>
    <option value="Saḩāb">Saḩāb</option>
    <option value="Umm as Summāq">Umm as Summāq</option>
    <option value="Wādī as Sīr">Wādī as Sīr</option>
</select>
              <br />
              <label>mobile</label><br></br>
              <input className="input_register"
                type="number"
                placeholder="mobile"
                onChange={(e) => setMobile(e.target.value)}
              />
              <br />
              <label>email</label><br></br>
              <input className="input_register"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <label>password</label><br></br>
              <input className="input_register"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <p>
             { status ? message:message1}

              </p>
              <button className="but_create" onClick={addNewUser}>Create</button>
              <br />
            </form>
      </div>
      <Footer/>
          </>
  );
};

export default Register;
