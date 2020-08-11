import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/wombat_logo.png';
import styling from 'styled-components';
import {ButtonContainer} from './Button';
import {ProductConsumer} from '../context';

export default class Navbar extends Component{
    render(){
        return(
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-2">
                
                <Link className="navbar-brand" to="/" alt="logo">
                    <img src={logo} alt="logo" />
                    
                </Link>
                    
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">Was ist Wombat</Link>
                    </li>
                    <li className="nav-item ml-5">
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
    
    .nav-link{
        color:var(--mainWhite);
        font-size:1.3rem !important;
        text-transform:capitalize;
    }
    .navbar-brand>a{
        position: absolute;
    
        z-index: 99;
      }
    .navbar-brand img{
        width: 100px;
        z-index: 99;
        cursor: pointer;
    }
    .navbar-brand>h1{
        color: white;
        position: absolute;
        font-family: 'Archivo Narrow', sans-serif;
        font-size: 24px;
        font-weight: 100;
        margin-left: 152px;
        z-index: 99;
        transform: translate3d(0,0,0);
        -webkit-transform: translate3d(0,0,0);
        -webkit-transform: translateZ(99px);
        
    }
    .cartArticleCount{
        position: absolute;
        margin-top: -15px;
        margin-left:10px;
        font-size:0.8rem;
    }
`;
