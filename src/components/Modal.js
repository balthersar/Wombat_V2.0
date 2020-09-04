import React, { Component } from 'react';
import styled from  'styled-components';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';

export default class Modal extends Component {
    render() {
        
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalOpen, closeModal, addToCart, changeSize} =value;
                    const {id, img, title, selectedSize, variant} = value.modalProduct;
                
                    //create list of variants for the customer to choose from the database of the current variant:
                    const listVariants = variant.map((value, index) =>
                        
                        <h5  key={value.id} className= {variant[index].size===selectedSize ? 'text-muted btn border border-dark font-weight-bold':'text-muted btn'}
                        onClick ={()=>{changeSize(id, variant[index].size);}}
                        >
                        {variant[index].size}: {variant[index].price} €
                        </h5>
                    );

                    if (!modalOpen){
                        return null;
                    }
                    else {
                        return(
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center p-5">
                                        <button className="abortButton" 
                                            onClick ={()=>{
                                                closeModal()
                                            }}>
                                                <span >&times;</span>
                                        </button>
                                        <h5>Artikel zum Warenkorb hinzufügen:</h5>
                                        <img src={img} className="img-fluid" alt="product"/>
                                        <h5>{title}</h5>
                                        <p>Wähle eine Größe:</p>
                                        <div className="column">
                                                <div className="row d-flex justify-content-center" >
                                                    {listVariants}                                                   
                                                </div>
                                        </div>
                                        <Link to='/'>
                                            <ButtonContainer 
                                                onClick ={()=>{
                                                    addToCart(id);
                                                    closeModal()
                                                }}>
                                                Weiter Shoppen
                                            </ButtonContainer>
                                        </Link>
                                        <Link to='/cart'>
                                            <ButtonContainer cart onClick ={()=>{
                                                addToCart(id);
                                                closeModal()
                                            }}>
                                                Zum Warenkorb
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                        );
                    }
                }}
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal {
    background:var(--mainWhite);
}
.abortButton{
    position: absolute; 
    right:1rem;
    top:0;
    font-size: 2rem;
    border: 0px solid #000000; 
    outline:none; 
}

`;