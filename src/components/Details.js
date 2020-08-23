import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import styling from 'styled-components';


export default class Details extends Component {
    render() {
        return (
            <DetailWrapper>
            <ProductConsumer>
                {(value) => {
                    const {changeSize} = value;
                    const {id, company, img, info, price, title,size, inCart, available, selectedSize} = value.detailProduct;
                    const listVariants = price.map((value, index) =>
                        <h5 className= {size[index]===selectedSize ? 'btn border border-white text-white font-weight-bold':'btn text-white text-dark'}
                        onClick ={()=>{changeSize(id, size[index]);}}
                        >
                        {size[index]}: {price[index]} €
                        </h5>
                    );
                    // Check if all sizes of wombats are in the cart
                    function isTrue(element, index, array) {
                        return element === true;
                    }
                    const allVariantsInCart= (inCart.every(isTrue));
                    return (
                        <div className="py-2">
                        <div className="container py-5">
                            {/*title */}
                            <div className = "row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>    
                            </div>             
                            {/*end title */}
                            {/*product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img} className= "img-fluid" alt="product"/>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model:{title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by: <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4 className = "text-blue">
                                        <strong>Preis: {price}<span>€</span></strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-3">
                                        Weitere Informationen:
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    {/* Auswahl des Produktes (Größe) */}
                                    <div className="column">
                                                <div className="row d-flex justify-content-center" >
                                                    {listVariants}                                                   
                                                </div>
                                    </div>
                                    {/* Model ist derzeit ausverkauft */}
                                    {available ?(
                                        null
                                        ):<p className="text-red font-italic mb-0"> Derzeit leider nicht verfügbar </p>
                                    }
                                    {/*buttons */}
                                    
                                    <div>
                                        <Link to='/'>
                                            <ButtonContainer>
                                                Zurück 
                                            </ButtonContainer>
                                        </Link>
                                        {available ?(
                                        <ButtonContainer 
                                            cart
                                            disabled={allVariantsInCart?true:false}
                                            onClick= {()=>{
                                                value.addToCart(id);
                                                
                                            }}
                                        >
                                            {allVariantsInCart? 'Im Warenkorb':"In den Warenkorb"}
                                        </ButtonContainer>
                                        ):null}
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    )
                }}
                
            </ProductConsumer>
            </DetailWrapper>
        )
    }
}
const DetailWrapper = styling.nav`
.container{
    border-radius: 10px;
    background-color:rgba(0, 0, 0, 0.65);
    color:white;
    
    z-index: -99;
}
`;