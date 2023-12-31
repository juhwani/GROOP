import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import backgroundphoto from "../images/background.png";
import logo from '../images/logo.png';
import './signin.css';
import { auth } from "../../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";


function Signin() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState();
    const navigate = useNavigate()

    const register = () => {
        navigate('/signup')
    }
    const signin = () => signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setUser(user)
        navigate("/home")
        console.log(user)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(error);
        console.log(errorCode)
        console.log(errorMessage)

    });
    return (
        
        <div style = {{  fontFamily: 'Lexend',display: 'flex',alignItems:'center',justifyContent:'center',backgroundImage: `url(${backgroundphoto})`, backgroundSize: 'cover',backgroundRepeat: 'no-repeat', height: '100vh',padding: '0',margin: '0'}}>
            <div className="subCon">
                <img src = {logo }style = {{marginRight: '30px',alignSelf: 'center',border: 'red',height: '300px',width: '300px',backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}/>
                <div className="subsubCon">
                    <h1 style = {{fontSize: '50px',marginBlockStart: '0', marginBlockEnd: '0'}}>Welcome!</h1>
                    <h1 style = {{fontSize: '10px',color: '#959494',marginBlockStart: '0', marginBlockEnd: '0',marginBottom: '50px'}}>Sign in with your account</h1>
                    <div className="inputTitle">
                        email
                    </div>
                    <input value = {email} onChange = {(e) => setEmail(e.target.value)}style = {{alignSelf: 'flex-start',borderRadius:'5px', border: '1px solid'}}></input>
                    <div className="inputTitle">
                        password
                    </div>
                    <input value= {password} onChange = {(e) => setPassword(e.target.value)}style = {{alignSelf: 'flex-start',borderRadius:'5px', border: '1px solid'}}></input>
                    <div onClick = {register} style = {{fontSize: '10px',cursor: 'pointer',alignSelf: 'flex-start'}}>Don't have an account? Register</div>
                    <div className="next" onClick = {signin}>
                        Log in
                    </div>

                </div>

                
            </div>


        </div>
        
    );
}

export default Signin