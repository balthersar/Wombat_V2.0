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
                    const {id, company, img, info, title, selectedSize, variant} = value.detailProduct;
                    const listVariants = variant.map((value, index) =>
                        <h5 className= {variant[index].size===selectedSize ? 'btn border border-white text-white font-weight-bold':'btn text-white text-dark'}
                        onClick ={()=>{changeSize(id, variant[index].size);}}
                        >
                        {variant[index].size}: {variant[index].price} €
                        </h5>
                    );
                    
                    function isTrue(element, index, array) {
                        return element === true;
                    }
                    // Check if minimum one variant of product is available
                    const variantAvailable = variant.map((value, index)=>{return value.available});
                    const oneOrMoreVariantsAvailable = variantAvailable.every(isTrue);

                    // Check if all variants of wombats are in the cart
                    const variantsInCart = variant.map((value, index)=>{return value.inCart});
                    const allVariantsInCart= variantsInCart.every(isTrue);

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
                                    {oneOrMoreVariantsAvailable ?(
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
                                        {oneOrMoreVariantsAvailable ?(
                                        <ButtonContainer 
                                            cart
                                            disabled={allVariantsInCart?true:false}
                                            onClick= {()=>{
                                                value.openModal(id);
                                                
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