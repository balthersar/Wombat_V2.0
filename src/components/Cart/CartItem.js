import React from 'react'

export default function CartItem({item ,value,index}) {
    const {id,title,img, price,size ,total,count} = item;
    const {increment, decrement, removeItem}  = value;
    /*inCart.map((value, index) =>{
        if (inCart[index]=true){
       */     
   console.log(index);
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
                {size[index]}
            </div>
            <div className = "col-10 mx-auto col-lg-1">
                <span className="d-lg-none">Preis: </span>
                {price[index]} €
            </div>
            <div className = "col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-white mx-1 text-white" onClick ={()=>decrement(id)}>-</span>
                        <span className="btn btn-white mx-1 text-white">{count[index]}</span>
                        <span className="btn btn-white mx-1 text-white" onClick ={()=>increment(id)}>+</span>
                    
                    </div>
                </div>    
            </div>
            <div className = "col-10 mx-auto col-lg-1">
                <div className="cart-icon" onClick ={()=>removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className = "col-10 mx-auto col-lg-1">
                <strong>{total[index]} €</strong>
            </div>
        </div>
    )
    
}
