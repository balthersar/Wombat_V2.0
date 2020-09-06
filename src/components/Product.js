import React, { Component } from 'react';
import styled  from "styled-components";
import {Link} from "react-router-dom"
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';

export default class Product extends Component {
    render() {
        const {id, title, img, variant} = this.props.product;
        function isTrue(element, index, array) {return element === true;}

        // Check if minimum one variant of product is available
        const variantAvailable = variant.map((value, index)=>{return value.available});
        const oneOrMoreVariantsAvailable = variantAvailable.some(isTrue);

        //get the cheapest and the most expensive variant to show in kollektion list
        const allPricesOfVariant = variant.map((value, index)=>{return value.price});
        const minPrice = Math.min.apply(Math, allPricesOfVariant);
        const maxPrice = Math.max.apply(Math, allPricesOfVariant);
        
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3" >
                <div className="card">
                    <ProductConsumer>
                    {/* Card Image */}
                    {value => (
                        <div className="main-container">
                            <div className="img-container p-3" 
                            onClick={() => value.handleDetail(id)}
                            >
                                <Link to="/details">
                                    <img src={img[0]} alt ="product" className="card-img-top" />
                                </Link>
                                {/* Button arenkorb nur bei verfügbaren Artikel */}
                                {oneOrMoreVariantsAvailable ?(
                                    <button 
                                        className="cart-btn"
                                        onClick = {() => {value.openModal(id);}}
                                    >
                                        <i className=" fas fa-cart-plus"/>
                                    </button>
                                ):(null)}
                                
                            </div>
                        
                            <div className="card-footer d-flex justify-content-between">
                                <p className=" font-italic align-self-center mb-0 " 
                                    onClick={() => value.handleDetail(id)}>
                                        <Link to="/details" className="text-decoration-none">{title}</Link>

                                </p>
                                {oneOrMoreVariantsAvailable ?(
                                    null
                                ):<p className="soldOutWaterMark text-red font-italic mb-0"> Ausverkauft</p>};
                            
                                <h5 className="text-blue font-italic mb-0">
                                    {minPrice} - {maxPrice}
                                    <span className="mr-1">€</span>
                                </h5>
                            </div>
                        </div>
                    )}
                    
                    </ProductConsumer>
                </div>
            </ProductWrapper>
        )
    }
}

Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}

const ProductWrapper = styled.div`
    .card{
        border-color:transparent;
        transition:all 0.5s linear;
    }
    .card-footer{
        
        background:transparent;
        border-top:transparent;
        transition:all 0.5s linear;
    }
    &:hover{
        .card{
            border:0.04rem solid rgba(0,0,0,0.2);
            box-shadow:2px 2px 5px 0 rgba(0,0,0,0.2);
        }
        .card-footer{
            background:rgba(247,247,247);
        }
    }
    .img-container{
        position:relative;
        overflow:hidden;
    }
    .card-img-top{
        transition:all 0.2s linear;
    }
    .card:hover .card-img-top{
        transform:scale(1.1)
    }
    .cart-btn{
        position:absolute;
        bottom:0;
        right:0;
        padding:0.2rem 0.4rem;
        background:var(--wombatGreen);
        border:none;
        color:var(--mainWhite);
        font-size:1.4rem;
        border-radius:0.5rem 0 0 0;
        transform:translate(100%,100%);
        transition:all 0.5s linear;
    }
    .card:hover .cart-btn{
        transform:translate(0,0);
    }
    .cart-btn:hover{
        color:var(--mainBlue);
        cursor:pointer;
    }
    .soldOutWaterMark{
        font-size:2rem;
        border: 0.2rem solid red;
        position:absolute;
        transform:rotate(-30deg);
        -webkit-transform:rotate(-30deg);
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
        bottom: 50%;
    }
`;
