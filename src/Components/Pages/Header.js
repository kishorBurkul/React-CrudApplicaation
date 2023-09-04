import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header =()=>{

    const [activeTab , setActiveTab] = useState('Home');
    
    return(
    <>
    {/* <div className="headerr">
    <p className="logoo">Contact App</p>
    <div className="header-rightt">
    <Link to="/">
    <p className={`${activeTab === "Home" ? "active" :""}`} onClick={()=>setActiveTab("Home")}></p>
    Home
    </Link>
 
    <Link to="/about">
    <p className={`${activeTab === "About" ? "active" :""}`} onClick={()=>setActiveTab("About")}></p>
   About
    </Link>

    <Link to="/add">
    <p className={`${activeTab === "AddContact" ? "active" :""}`} onClick={()=>setActiveTab("AddContact")}></p>
    Add Contact
    </Link>

    

    </div>


    </div> */}


<header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Company Name</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="btn"> <Link  to="/">Home</Link></button>
                
                </li>
                <li className="nav-item">
                <button className="btn"><Link  to="/about">About</Link></button>
                
                </li>
                <li className="nav-item">
                
                <button className="btn"><Link  to="/add">Add Contact</Link></button>
                </li>
                {/* <button className="btn"><Link  to="/add">Add Contact</Link></button> */}
                {/* <Link to="/">
    
    <button className={`${activeTab === "Home" ? "active" :""}`} onClick={()=>setActiveTab("Home")}>Home</button> 
    </Link>
              </li>
              <li className="nav-item">
            
                <Link to="/">
    
    <button className={`${activeTab === "About" ? "active" :""}`} onClick={()=>setActiveTab("About")}>About</button> 
    </Link>
              </li>
              <li className="nav-item">
              
                <Link to="/">
    
    <button className={`${activeTab === "AddContact" ? "active" :""}`} onClick={()=>setActiveTab("AddContact")}>Add Contact</button> 
    </Link> */}
              
            </ul>
          </div>
        </div>
      </nav>
    </header>
    </>)

}
export default Header;