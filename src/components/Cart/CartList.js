import React from 'react';
import CartItem from './CartItem';

export default function CartList({value}) {
    

    const {cart} = value;
    return (
        <div className ="container-fluid">
            {cart.map(item => {               
                return item.inCart.map((innerElement,index)=>{
                    
                    if (item.inCart[index]===true){
                        return <CartItem key={item.id} item ={item} value = {value} index={index}/>;
                    }
                })
            })}
        </div>
    )
}
