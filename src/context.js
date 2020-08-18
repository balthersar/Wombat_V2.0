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
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        let price =0;
        {product.selectedSize==="Groß"?(
            price = product.price1
        ):(
            price = product.price2
        )}
        
        product.total = price;

        this.setState(
        () => {
            return { products: tempProducts, cart: [...this.state.cart, product] };
        },
        () => {
                this.addTotals();
                this.addArticleCounter();
        }
        )
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
    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(() => {
            return { cart: [...tempCart] } 
        }, 
        () => { this.addTotals(); this.addArticleCounter(); })
    };
    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index];

        product.count = product.count -1;
        if(product.count ===0){
            this.removeItem(id);
        }
        else{
            product.total = product.count * product.price;
            this.setState(() => {
                return { cart: [...tempCart] } 
            }, 
            () => { this.addTotals();this.addArticleCounter(); });
        }
    };
    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

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
        this.state.cart.map(item => (total += item.total));
        const tempTax = total * 0.19;
        const tax = parseFloat(tempTax.toFixed(2));
        const subTotal = total - tax;
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
        this.state.cart.map(item => (count += item.inCart * item.count));
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