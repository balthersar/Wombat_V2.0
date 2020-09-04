import React from 'react';
import CartItem from './CartItem';

export default function CartList({value}) {
    
    const {cart} = value;
    return (
        <div className ="container-fluid">
            {cart.map((item) => { 
                return <div key={item.id}> 
                 {item.variant.map((innerElement,index)=>{
                    if (item.variant[index].inCart===true){
                        return <CartItem key={item.variant.id}  item ={item} value = {value} index={index}/>;
                    }
                    return null
                })}
                </div>
            })}
        </div>
    )

}
