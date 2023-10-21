import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
// import backgroundphoto from "../images/background.png";
import logo from '../images/logo.png';
import './style.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import { database } from "../../firebase-config";
import { ref, onValue } from "firebase/database";

function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    // const readData = () => {
    //     const usersRef = ref(database, "users/");
    //     onValue(usersRef, snapshot => {
    //         const data = snapshot.val();
    //         console.log(data);
    //     });
    // };

    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            navigate("/home");
        })
        .catch(err => {
            alert(err);
        });
    }

    const navigate = useNavigate();
    return (
        
        <div className="signupPageContainer" style = {{marginRight: '30px',fontFamily: 'Lexend',display: 'flex',alignItems:'center',justifyContent:'center',padding: '0',margin: '0'}}>
            <div className="subCon">
                <img src = {logo} style = {{marginRight: '30px', alignSelf: 'center',border: 'red',height: '300px',width: '300px',backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}/>
                <div className="subsubCon">
                    <h1 style = {{fontSize: '50px',marginBlockStart: '0', marginBlockEnd: '0'}}>Welcome!</h1>
                    <h1 style = {{fontSize: '10px',color: '#959494',marginBlockStart: '0', marginBlockEnd: '0',marginBottom: '50px'}}>Register your account</h1>
                    <div className="inputTitle">
                        username
                    </div>
                    <input onChange={(e) => {setUsername(e.target.value)}} style = {{alignSelf: 'flex-start',borderRadius:'5px', border: '1px solid'}}></input>
                    <div className="inputTitle">
                        email
                    </div>
                    <input onChange={e => {setEmail(e.target.value)}}  style = {{alignSelf: 'flex-start',borderRadius:'5px', border: '1px solid'}}></input>
                    <div className="inputTitle">
                        password
                    </div>
                    <input onChange={e => {setPassword(e.target.value)}} style = {{alignSelf: 'flex-start',borderRadius:'5px', border: '1px solid'}}></input>
                    <div className="next" onClick={() => signUp(email, password)}>
                        Next
                    </div>
                </div>

                
            </div>

            {/* <button onClick={readData}>Click</button> */}


        </div>
        
    );
}

export default Signup