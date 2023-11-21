import './login.css';
import profile from "../../images/a.png";
import email from "../../images/email.jpg";
import pass from "../../images/pass.png";
import { Routes, Route, Link } from 'react-router-dom';
const login=()=> {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>
           </div>
         </div>
         <div>
           <h1>Login Page</h1>
           <div>
             <img src={email}alt="email" className="email"/>
             <input type="text" placeholder="user name" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="user name" className="name"/>
           </div>
          <div className="login-button">
          <Link to={"./Body"}><button>Login</button></Link> 
          
          </div>

            <p className="link">
              <a href="#">Forgot password </a> <br/> <a href="#">Sign Up</a>
            </p>


         </div>
       </div>


     </div>
    </div>
  );
}
export default login;