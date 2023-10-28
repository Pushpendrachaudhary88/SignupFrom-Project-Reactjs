import React, {useEffect, useState} from "react";
import axios from "axios";


const Login = ({token}) => {
   const [user, setUser] = useState({
    email: "", password: ""
   })

   const[error,setError] = useState("");
   const[success, setSuccess] = useState("");


   const {email, password} = user;

   function handleInput(e){
         setUser({...user, [e.target.name]: e.target.value})
   }
   

   useEffect((e) =>{
   

    
    


   },[])


   const handleSubmit = (e) =>{
       e.preventDefault();
       // validations: 
       if(  !email || !password ){
        //    alert("All fields are required");
        setError("All field are Mendatory");
        setSuccess("");
        }
        else{

           axios.post("https://instagram-express-app.vercel.app/api/auth/login/" , {email,password})
           .then( response => {
                console.log(response.data);
                // setToken(response.data.data.token);
                // add token to local storage
               localStorage.setItem("token", response.data.data.token);
               setSuccess("You Are Loggin Successfully !")
               setError("");
           })

           .catch( err=> console.log(err.response.data.message))
           setError("User does't Exist !");
           setSuccess("");

        }
    }


    return(
        <div className="container">
        <div className="login">
            <h1>Welcome To The Login Page</h1>

            {
                success && <h4 style={{color:"Green",fontSize:"30px"}}>{success}</h4>
            }

            {
                error && <h4 style={{color:"Red", fontSize:"30px"}}>{error}</h4>
            }
            <form  className="loginform"onSubmit={handleSubmit}>
                 
                 <input type="text"  placeholder="Enter your email" name = "email"
                    value={user.email} onChange={handleInput} 
                 />
                 <input type="password"  placeholder="Enter your password" name = "password"
                    value={user.password} onChange={handleInput}
                 />
                 <h2>Forget Password?</h2>
                 
                 <button type="submit">LOGIN</button>
                 <p>Not a member?<span>Signup now</span></p>
            </form>
        </div>
        </div>
    )
}

export default  Login;