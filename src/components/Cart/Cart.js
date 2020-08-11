import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from "./CartColumns.js";
import EmptyCart from "./EmptyCart.js";
import {ProductConsumer} from "../../context";
import CartList from './CartList';
import CartTotals from './CartTotals.js';
import styling from 'styled-components';

export default class Cart extends Component {
    render() {
        return (
            <CardWrapper>
                <section>
                    <ProductConsumer>
                        {value =>{
                            const {cart} = value;
                            if (cart.length>0){
                                return(
                                    <React.Fragment>
                                        <div className="py-2 px-2">
                                            <div className="containercart">
                                            <Title name="Dein" title = "Warenkorb"/>
                                            <CartColumns/>  
                                            <CartList value= {value}/>
                                            <CartTotals value= {value} />
                                            </div>
                                        </div>
                                    </React.Fragment>
                                );
                            } else {
                                return <EmptyCart/>;
                            }
                        }}
                    </ProductConsumer>
                </section>
            </CardWrapper>
        )
    }
}
const CardWrapper = styling.nav`
.containercart{
    border-radius: 10px;
    background-color:rgba(0, 0, 0, 0.65);
    color:white;
    padding: 10px;
    z-index: -99;
}
`;