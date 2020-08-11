import React, { Component } from 'react';
import Product from './Product';
import styling from 'styled-components';
import {ProductConsumer} from '../context';

export default class ProductList extends Component {
    render() {
        
        return (
            <ProdListWrapper >
                <React.Fragment>
                    <div className="py-2">
                        <div className="container">
                            
                            <div className="row">
                                <ProductConsumer>
                                    {value=>{
                                        return value.products.map(product =>{
                                            return <Product key = {product.id} product={product}/>;
                                        })
                                    }}
                                </ProductConsumer>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </ProdListWrapper>
            //<Product /> 
        )
    }
}
const ProdListWrapper = styling.nav`
.container{
    border-radius: 10px;
    background-color:rgba(0, 0, 0, 0.65);
    color:white;
    
    z-index: -99;
}
`
