import React, {useState} from "react"
import logo2 from "../images/logo2.png"
import birdman from '../images/birdman.png'
import settings from "../images/Vector.png"
import fourusers from "./temp_data.jsx"
import Background from '../images/background.png'
import chad from '../images/chad.png'
import sharknado from '../images/sharknado.png'
import you from '../images/you.png'
import './style.css';

function Chatroom() {
    const [isNavOpen, setIsNavOpen] = useState(false)

    return (
        <>  
        <div style = {{  fontFamily: 'Lexend',display: 'flex',alignItems:'center',justifyContent:'center',backgroundImage: `url(${Background})`, backgroundSize: 'cover',backgroundRepeat: 'no-repeat', height: '100vh',padding: '0',margin: '0'}}>
            {/* <button className="sidebar-toggle"
                onClick = {() => {setIsNavOpen(!isNavOpen)} }>
                <span className="material-symbols-outlined"> {
                isNavOpen ? "toggle_on": "toggle_off"}
                </span>
            </button> 
            
            <nav className= {`nav  ${isNavOpen ? "nav-open": "nav-closed"}`}>
                <img src = {settings} style = {{margin: 10, alignItems: 'left', display: "flex", flexDirection: "row", height: '20px',width: '20px',cursor: 'pointer'}}/>
                <img src = {logo2} style = {{alignSelf: 'center', display: "flex", flexDirection: "row",height: '80px',width: '240px',backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}/>

                
                {
                    fourusers.map((item) => (
                        <div className = "user_list">
                            <div className="user" style = {{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
                                <div className="profile">
                                    {item.profile}
                                </div>
                                <div className= "namenbio" style={{display: "flex", flexDirection: "column", alignContent: "space-around"}}>
                                    <div className='username'>
                                        {item.username}
                                    </div>
                                    
                                    <div className="bio">
                                        {item.bio}
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    ))
                }
                <div className="generate">Generate Ice Breaker!</div>
            </nav>
            <div className="Main">

            </div> */}

            <div className="mainCon">
                <div className="navBar">
                    <img src= {settings} style = {{position: 'absolute', left: '240px',top: '97px',cursor: 'pointer'}}/>
                    <img src={logo2} alt="" style = {{height: '50px',width: '150px', marginTop: '50px'}}/>
                    <div className="generate" style = {{marginTop: '70px'}}>
                        <img style = {{height: '40px',width: '40px'}}src= {birdman} alt="" />
                        <div className="descrip">
                            <p className = 'descripp'>Birdman</p>
                            <p className = 'descripp' style = {{fontSize: '7px',fontWeight:'400'}}>What can I say? I love birds and I'm a man</p>
                        </div>
                    </div>
                    <div className="generate">
                        <img style = {{height: '40px',width: '40px'}}src= {sharknado} alt="" />
                        <div className="descrip">
                            <p className = 'descripp'>sharknado</p>
                            <p className = 'descripp' style = {{fontSize: '7px',fontWeight:'400'}}>tornados and sharks</p>
                        </div>
                    </div>
                    <div className="generate">
                        <img style = {{height: '40px',width: '40px'}}src= {chad} alt="" />
                        <div className="descrip">
                            <p className = 'descripp'>lyftking</p>
                            <p className = 'descripp' style = {{fontSize: '7px',fontWeight:'400'}}>biggest bro you’ll ever see</p>
                        </div>
                    </div>
                    <div className="generate">
                        <img style = {{height: '40px',width: '40px'}}src= {you} alt="" />
                        <div className="descrip">
                            <p className = 'descripp'>you</p>
                            <p className = 'descripp' style = {{fontSize: '7px',fontWeight:'400'}}>I need some friends</p>
                        </div>
                    </div>
                    <div className="generatebut">
                        Generate Prompt!
                    </div>
                </div>
                <div className="chatCon">
                    {/* Need to add chat messages here */}
                </div>
            </div>
            </div>

        </>
    )
}

export default Chatroom
