import './Login.css';
import profile from "../Images/a.png";
import email from "../Images/email.jpg";
import pass from "../Images/pass.png";
const Login=()=> {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile}alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Login Page</h1>
           <div>
             <img src={email}alt="email" className="email"/>
             <input type="text" placeholder="user name/email/phone no" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="password" className="name"/>
           </div>
          <div className="login-button">
          <button>Login</button>
          </div>

            <p className="link">
              <a href="#">Forgot password </a> <br/><br/>
              <a href="#">SIGN UP</a>
            </p>


         </div>
       </div>


     </div>
    </div>
  );
}

export default Login;