

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import styled from "styled-components"
import BurguerButton from "../BurguerButton/BurguerButton"
import { NavBar } from "../../Const/NavBar.links"
import { useAuth } from "../../Providers/AuthProvider"




const Navbar = () => {
    const [clicked, setClicked] = useState(false)
    const { isAuthenticated, logout } = useAuth();

    const handleClick = () => {
        setClicked(!clicked)
    }
    const handleLinkClick = () => {
        setClicked(false)
    }
    const handleLogout = () => {
        logout();

    };

    return (
        <NavContainer>
            <h2>Watch <span> Game</span></h2>
            <div className={`links ${clicked ? 'active' : ''}`}>

                {NavBar.map((link, index) => {
                    if (link.text === "Login" && isAuthenticated) {
                        return (
                            <Link key={index} onClick={handleLogout} to="#">
                                Logout
                            </Link>
                        );
                    } else if (!isAuthenticated && link.text === "Login") {
                        return (
                            <Link key={index} onClick={handleLinkClick} to={link.path}>
                                Login
                            </Link>
                        );
                    } else {
                        return (
                            <Link key={index} onClick={handleLinkClick} to={link.path}>
                                {link.text}
                            </Link>
                        );
                    }
                })}

            </div>
            <div className="burguer">
                <BurguerButton clicked={clicked} handleClick={handleClick} />
            </div>
            <BgDiv className={`initial ${clicked ? 'active' : ''}`} ></BgDiv>



        </NavContainer>
    )
}

export default Navbar

const NavContainer = styled.nav`
h2{
color: white;
font-weight: 400;
margin-left: 20px;
span {
    font-weight: bold;
 }
}

padding: 2rem;
background-color: #222;
display: flex;
align-items: center;
justify-content: space-between;
text-align: center;
a {
    color: white;
    text-decoration: none;
    margin-right: 1rem
}
.burguer {
    @media(min-width:768px){
        display: none;

    }
}

.links{

    position: absolute;
    top:-700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    z-index: 11;
    a{
        color: white;
        font-size: 2rem;
        display: block;
    }

    @media(min-width:768px){
        position: initial;
        margin: 0;
        a{
            font-size: 1rem;
            color: white;
            display: inline;
        }
         }
}

.links.active{
   
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
        font-size: 2rem;
        margin-top: 1rem;
        color: white;
    }
}
    
    `

const BgDiv = styled.div`
        
        position:absolute;
        background-color: #272525;
        top: -1000px;
        left: -1000px;
        width: 100%;
        height: 100%;
        z-index: 10;
       
       
        transition: all .6s ease;
        
        &.active{
         
            top: 14%;
            left: 0;
            width: 100%;
            height: 100%;
          
            
        }
    `