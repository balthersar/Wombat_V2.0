import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';


const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        cartArticleCount:0,
        selectedSize: "Groß",
        
    }
    
    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            singleItem.variant.map((value, index)=>{
                singleItem.variant[index].inCart = false;
                singleItem.variant[index].count = 0;
                singleItem.variant[index].total = 0;
                return null
            })
            tempProducts = [...tempProducts, singleItem];

        })
        this.setState(() => {
            return { products: tempProducts };
        })
    }
    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    };
    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: product }
        })
    };
    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        const index = tempProducts.indexOf(this.getItem(id));
        let productAlreadyExistInCart=false;
        let product = tempProducts[index];
        product.variant.map((value, index) =>{
            if (product.variant[index].size===product.selectedSize){
                product.variant[index].inCart= true;
                product.variant[index].total=product.variant[index].total + product.variant[index].price
                product.variant[index].count = product.variant[index].count + 1;
            }
            return null
        });
        
        tempCart.map((cartvalue,index)=>{
            if (tempCart[index]===product){
                productAlreadyExistInCart=true;
                return null
            }else {return null}
        });
        if (productAlreadyExistInCart===true){
            this.setState(
            () => {
                return { products: tempProducts, cart: [...this.state.cart] };
            },
            () => {

                    this.addTotals();
                    this.addArticleCounter();
            }
            )
        }else{
            this.setState(
                () => {
                    return { products: tempProducts, cart: [...this.state.cart, product] };
                },
                () => {
    
                        this.addTotals();
                        this.addArticleCounter();
                }
                )
        }
    };
    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { modalProduct: product, modalOpen: true };
        })
    };
    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false };
        });
    };
    increment = (id, incrementsize) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index];
        product.variant.map((value, index) =>{
            if(incrementsize===product.variant[index].size){
            product.variant[index].count = product.variant[index].count + 1;
            product.variant[index].total = product.variant[index].price * product.variant[index].count;
            return null
            }else{return null}
        });
        this.setState(() => {
            return { cart: [...tempCart] } 
        }, 
        () => { this.addTotals(); this.addArticleCounter(); })
    };
    decrement = (id, decrementsize,) => {
        let tempCart = [...this.state.cart];
        //let tempProducts = [...this.state.products];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index];
        product.variant.map((value, index) =>{
            if(decrementsize===product.variant[index].size){
                product.variant[index].count = product.variant[index].count - 1;
                product.variant[index].total = product.variant[index].price * product.variant[index].count

                function isZero(element, index, array) {
                    return element === 0;
                }
                const tempCount = product.variant.map((value, index)=>{return value.available});
                if(tempCount.every(isZero)){
                    this.removeItem(id,decrementsize);
                }
                else if(product.variant[index].count===0){
                    product.variant[index].total =0;
                    product.variant[index].count= 0;
                    product.variant[index].inCart= false; 
                     
                } 
            }
            return null
            },
            
            this.setState((prevState) => {
                
                return { cart: [...tempCart]  } 
            },
            () => {
                this.addTotals();this.addArticleCounter();})
            
            
        )  
    };
 
    removeItem = (id, size) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        //change product states to not in Cart
        removedProduct.variant.map((value, index) =>{
            if(removedProduct.variant[index].size===size){
                removedProduct.variant[index].inCart = false;
                removedProduct.variant[index].count = 0;
                removedProduct.variant[index].total = 0;
            }
            return null
        })

        // Check if minimum one variant of product is inCart
        function isTrue(element, index, array) {return element === true;}
        const variantInCart = removedProduct.variant.map((value, index)=>{return value.inCart});
        const oneOrMoreVariantInCart = variantInCart.some(isTrue);

        //delete product from cart if no variant is anymore in cart
        if (oneOrMoreVariantInCart ===true){
            tempCart = tempCart.filter(item => item.id !== id);
            tempCart = [...tempCart,removedProduct]
        }else{
            tempCart = tempCart.filter(item => item.id !== id);

        }

        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]

            };
        }, () => {
            this.addTotals();
            this.addArticleCounter();
        })
        

    };
    clearCart = () => {
        this.setState(() => {
            return { cart: [] };
        },
            () => {
                this.setProducts();
                this.addTotals();
                this.addArticleCounter();
            })
    }
    addTotals = () => {
        let total = 0;
        this.state.cart.map(item => (
            item.variant.map((valie,index)=>{
                return total += item.variant[index].total  
            })
            )
            );
        const tempTax = total * 0.19;
        const tax = parseFloat(tempTax.toFixed(2));
        let subTotal = total - tax;
        subTotal = parseFloat(subTotal.toFixed(2));
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total,
            }
        })
    }
    // number of articles in the cart symbol in navbar
    addArticleCounter = () => {
        let count = 0;
        this.state.cart.map(item => (
            item.variant.map((innerElement, index)=>{
                return count += item.variant[index].inCart * item.variant[index].count;
            })
        ))
            
        this.setState(() => {
            return {
                cartArticleCount: count,
            }
        })
    }
    changeSize = (id, selectedSize) => {
        
        const product = this.getItem(id);
        product.selectedSize = selectedSize;
        this.setState(() => {
            return { modalProduct: product }
        })
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
                changeSize: this.changeSize
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };