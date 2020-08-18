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
                    const {id, company, img, info, price, title, inCart, available, selectedSize, price1, price2} = value.detailProduct;
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
                                    {selectedSize==='Groß'?(
                                                <div className="row d-flex mb-0" >
                                                    <h5 className=" btn border border-white text-white font-weight-bold" onClick ={()=>{
                                                        changeSize(id, 'Groß');
                                                    }}>
                                                    Groß*: {price1} €</h5>  

                                                    <h5 className=" btn text-dark" onClick ={()=>{
                                                        {!inCart?
                                                            (changeSize(id, 'Mini')
                                                            ):(changeSize(id, 'Groß'))
                                                        }
                                                        
                                                    }}
                                                    >Mini*: {price2} €</h5>   
                                                </div>
                                            ):(
                                                <div className="row d-flexmb-0 " >
                                                    <h5 className=" btn text-white text-dark" onClick ={()=>{
                                                        {!inCart?
                                                            (changeSize(id, 'Groß')
                                                            ):(changeSize(id, 'Mini'))
                                                        }
                                                    }}>
                                                    Groß*: {price1} €</h5>   
                                                    <h5 className="btn border border-white text-white font-weight-bold" onClick ={()=>{
                                                    changeSize(id, 'Mini');
                                                }}
                                            >Mini*: {price2} €</h5>  
                                            </div>
                                            )}
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
                                            disabled={inCart?true:false}
                                            onClick= {()=>{
                                                value.addToCart(id);
                                                
                                            }}
                                        >
                                            {inCart? 'Im Warenkorb':"In den Warenkorb"}
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