import React from 'react'

export default function CartItem({item ,value,index}) {
    const {id,title,img,variant} = item;
    const {increment, decrement, removeItem}  = value;
    
   
    return (
        <div className="row my-2 text-capitalize text-center">
            <div className = "col-10 mx-auto col-lg-1">
                <img src={img} style ={{width:'5rem', height:'auto'}} className="img-fluid" alt="product"/>
            </div>
            <div className = "col-10 mx-auto col-lg-1">
                <span className="d-lg-none">Produkt: </span>
                {title}
            </div>
            <div className = "col-10 mx-auto col-lg-1">
                <span className="d-lg-none">Größe: </span>
                {variant[index].size}
            </div>
            <div className = "col-10 mx-auto col-lg-1">
                <span className="d-lg-none">Preis: </span>
                {variant[index].price} €
            </div>
            <div className = "col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                    
                        <span className="btn btn-white mx-1 text-white" onClick ={()=>
                            decrement(id, variant[index].size)}>-</span>
                        <span className="btn btn-white mx-1 text-white">{variant[index].count}</span>
                        <span className="btn btn-white mx-1 text-white" onClick ={()=>
                            increment(id, variant[index].size)}>+</span>
                    
                    </div>
                </div>    
            </div>
            <div className = "col-10 mx-auto col-lg-1">
                <div className="cart-icon" onClick ={()=>removeItem(id,variant[index].size)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className = "col-10 mx-auto col-lg-1">
                <strong>{variant[index].total} €</strong>
            </div>
        </div>
    )
    
}
