import React, {useEffect, useState} from "react";
import axios from "axios";
import "../index.css"




const Signup = ({setToken}) => {
   const [user, setUser] = useState({
    name:"", email: "", password: "", cpassword: ""
   });

   const[success,setSuccess] = useState("")
   const[error,setError]  = useState("");


   const {name, email, password, cpassword} = user;

   function handleInput(e){
         setUser({...user, [e.target.name]: e.target.value})
   }


   useEffect((e) =>{
    
   },[])

   function handleSubmit(e){
       e.preventDefault();
       // validations: 
       if( !name || !email || !password || !cpassword){
        //    alert("All fields are required");
        setError("All field are Mendatory");
        setSuccess("");
        }
        else if(password !== cpassword){
            // alert("Passwords do not match");
            setError("Confirm Password is not Match");
            setSuccess("");
        }
        else{

           axios.post("https://instagram-express-app.vercel.app/api/auth/signup" , {name,email,password})
           .then( response => {
               console.log(response.data);
               setToken(response.data.data.token);

               // add token to local storage
               localStorage.setItem("token", response.data.data.token);
               setSuccess("You are Successfully Sigup ! ");
               setError("");
           
           })

           .catch( err=> console.log(err.response.data.message))
        //    setError("Something went Wrong");
           setSuccess("");

        }
    }

  return (
    <div className="signup">
            <h1> Welcome To The Signup Page</h1>
            {
                error && <h4 className="errorclass">{error}</h4>
            }
            {

                success && <h4 style={{color:"Green",fontSize:"30px"}}>{success}</h4>
            }


            <form  className="form"onSubmit={handleSubmit}>
                
                 <input type="text"  placeholder="Enter your name" name = "name"
                    value={user.name} onChange={handleInput}
                 />
                
                 <input type="email"  placeholder="Enter your email" name = "email"
                    value={user.email} onChange={handleInput} 
                 />
              
                 <input type="password"  placeholder="Enter your password" name = "password"
                    value={user.password} onChange={handleInput}
                 />
              
                 <input type="password"  placeholder="Enter your confirm password" name = "cpassword"
                    value={user.cpassword} onChange={handleInput}
                 />
                 <button type="submit">SIGNUP</button>
            </form>
        </div>
    




  )
}

export default Signup;