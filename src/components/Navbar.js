import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/wombat_logo.png';
import styling from 'styled-components';
import {ButtonContainer} from './Button';
import {ProductConsumer} from '../context';

export default class Navbar extends Component{
    render(){
        const navslide = () => {
            const burger = document.querySelector(".burger");
            const nav = document.querySelector(".navbar-nav");
            const navLinks = document.querySelectorAll(".navbar-nav li");
              nav.classList.toggle("open");
  
              navLinks.forEach((link, index) => {
                if (link.style.animation) {
                  link.style.animation = "";
                } else {
                  link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
                    0.5}s`;
                }
              });

              burger.classList.toggle("toggle");
            };

        return(
            <NavWrapper className="navbar  navbar-dark px-sm-2">
                <div class="burger" onClick={navslide}>
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
                <Link className="navbar-brand" to="/" alt="logo">
                    <img src={logo} alt="logo" />
                    
                </Link>
                    
                <ul className="nav-links">
                    <li className="nav-item ">
                        <Link to="/" className="nav-link">Was ist Wombat</Link>
                    </li>
                    <li className="nav-item ">
                        <Link to="/kollektion" className="nav-link">Kollektion</Link>
                    </li>
                    
                    
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus"></i>
                        </span>
                        <section>
                            <ProductConsumer>
                                {value =>{
                                    const {cartArticleCount} = value;  
                                    return (
                                        <React.Fragment>
                                            <i>
                                                <strong className="cartArticleCount">{cartArticleCount}</strong>
                                            </i>
                                        </React.Fragment>
                                    );
                                }}
                            </ProductConsumer>
                        </section>
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styling.nav`
    background: var(--wombatGreen);
    height: 60px;
    
    
    .nav-link{
        color:var(--mainWhite);
        font-size:1.3rem !important;
        text-transform:capitalize;
    }
    
    .navbar-brand img{
        width: auto;
        height: 40px;
        margin-left: 20px;
        z-index: 99;
        transform: translate3d(0,0,0);
        -webkit-transform: translate3d(0,0,0);
        -webkit-transform: translateZ(99px);
        cursor: pointer;
    }
    
    .nav-links {
        display: flex;
        list-style: none;
        margin-top:auto;
        margin-bottom:auto;
        width: 50%;
        height: 10%;
        justify-content: space-around;
        align-items: center;
        margin-left: auto;
    }

    .nav-links li a {
        color: white;
        text-decoration: none;
        font-size: 25px;   
    }
    .nav-links li:hover{
        background: white;
        transition: .5s;
        transform: translate3d(0,0,0);
        -webkit-transform: translate3d(0,0,0);
        -webkit-transition: .5s;   
        border-radius: 7px;
    }
    .nav-links li a:hover{
        color: rgb(125,166,136);
    }
        
    .cartArticleCount{
        position: absolute;
        margin-top: -15px;
        margin-left:10px;
        font-size:0.8rem;
    }
    
    
    @media screen and (max-width: 768px) {
        
        .navbar-brand img{
            margin-left: 40px;
        }
        .line1, .line2, .line3 {
          width: 30px;
          height: 3px;
          background: white;
          margin: 5px;
        }
        .burger {
            position: absolute;
            z-index: 99; 
            cursor:pointer;
        }
        .toggle.burger{
            position:fixed;
        }
        
        .nav-links {
            left:0;
            position: fixed;
            background: var(--wombatGreen);
            width: 70%;
            height:200vh;
            flex-direction: column;
            clip-path: circle(50px at -90% -30%);
            -webkit-clip-path: circle(50px at -90% -30%);
            transition: all 1s ease-out;
            -webkit-transition: all 1s ease-out;
            pointer-events: none;
            z-index: 9;
            -webkit-transform: translateZ(9px);
          }
        .nav-links.open {
            clip-path: circle(2000px at -120% -30%);
            transform: translate3d(0,0,0);
            -webkit-transform: translate3d(0,0,0);
            -webkit-clip-path: circle(2000px at -120% -30%);
            pointer-events: all;
            opacity: 0.9;
            transform: translate3d(0,0,0);
            -webkit-transform: translate3d(0,0,0);
            -webkit-transform: translateZ(9px); 
          }
        
        
        
        
        .toggle .line1{
            transform: rotate(-45deg) translate(-5px,6px);
            -webkit-transform: rotate(-45deg) translate(-5px,6px);
          }
          .toggle .line2{
            opacity: 0;
          }
          .toggle .line3{
            transform: rotate(45deg) translate(-5px,-6px);
            -webkit-transform: rotate(45deg) translate(-5px,-6px);
          }
`;
