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
                    const {changeSize, addToCart, changeSelectedImage} = value;
                    const {id, company, img, info, title, selectedSize, variant, selectedImageIndex} = value.detailProduct;
                    const listVariants = variant.map((value, index) =>
                        <h5 className= {variant[index].size===selectedSize ? 'btn border border-white text-white font-weight-bold':'btn text-white text-dark'}
                        onClick ={()=>{changeSize(id, variant[index].size);}}
                        >
                        {variant[index].size}: {variant[index].price} €
                        </h5>
                    );
                    let imgZeroToNine = img.slice(0, 9)
                    var listImagesFirstRow = imgZeroToNine.map((value, index) =>{
                        return (<div className={index===selectedImageIndex?'border border-white ':'cursor-pointer'}
                                        onClick ={()=>{changeSelectedImage(id, index);}}>
                                        <img src={img[index]} className= "img-fluid" alt="product" width="100%"/>
                                </div>)
                    });
                    let imgTenToNineteen = img.slice(9, 18)
                    var listImagesSecondRow = imgTenToNineteen.map((value, index) =>{
                        return (<div className={index+9===selectedImageIndex?'border border-white ':'cursor-pointer'}
                                        onClick ={()=>{changeSelectedImage(id, index+9);}}>
                                        <img src={img[index+9]} className= "img-fluid" alt="product" width="100%"/>
                                </div>)
                    });
                
                    function isTrue(element, index, array) {
                        return element === true;
                    }
                    // Check if minimum one variant of product is available
                    const variantAvailable = variant.map((value, index)=>{return value.available});
                    const oneOrMoreVariantsAvailable = variantAvailable.some(isTrue);

                    ///check if current selected size variant is in cart and available:
                    let selectedSizeInCart=false;
                    let seletectedSizeCount =0;
                    let selectedSizeAvailable =false;
                    variant.map((value, index) =>{
                        if (selectedSize===variant[index].size && variant[index].inCart===true){
                            selectedSizeInCart = true
                            seletectedSizeCount=variant[index].count
                            selectedSizeAvailable=variant[index].available
                            return null
                        }else if(selectedSize===variant[index].size){
                            selectedSizeAvailable=variant[index].available
                            return null
    
                        }else {return null}
                    });

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
                                    <img src={img[selectedImageIndex]} className= "img-fluid" alt="product"/>
                                    <div class="carousel-container">
                                        <div class= "carousel-slide">
                                            {listImagesFirstRow}   
                                        </div>                                                
                                    </div>
                                    <div class="carousel-container">
                                        <div class= "carousel-slide">
                                            {listImagesSecondRow}   
                                        </div>                                                
                                    </div>
                                </div>
                                

                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model:{title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by: <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-3">
                                        Weitere Informationen:
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    {/* Auswahl des Produktes (Größe) */}
                                    <div className="column">
                                                <div className="row d-flex justify-content-center mb-0" >
                                                    {listVariants}                                                   
                                                </div>
                                    </div>
                                    {/* Model ist derzeit ausverkauft */}
                                    {oneOrMoreVariantsAvailable ?(
                                        null
                                        ):<p className="text-red font-italic mb-0"> Dieses Produkt ist derzeit leider nicht verfügbar </p>
                                    }
                                    {/*buttons */}
                                    <div>
                                        {selectedSizeInCart ? (
                                            <p className=" mb-0" >
                                                {" "}
                                                Produkt in {selectedSize} bereits {seletectedSizeCount}x im Warenkorb
                                            </p>
                                            ):(null)
                                        } 
                                        {selectedSizeAvailable  ? (
                                            null
                                            ):(<p className="text-red font-italic mb-0"> Diese Größe ist derzeit leider nicht verfügbar </p>)
                                        } 
                                        <Link to='/'>
                                            <ButtonContainer>
                                                Zurück 
                                            </ButtonContainer>
                                        </Link>
                                        {selectedSizeAvailable ?
                                            [(selectedSizeInCart ? (
                                                <ButtonContainer 
                                                        onClick ={()=>{addToCart(id);}}>
                                                        Erneut Hinzufügen
                                                </ButtonContainer>
                                                ):(<ButtonContainer 
                                                        onClick ={()=>{addToCart(id);}}>
                                                        Hinzufügen
                                                </ButtonContainer>))
                                            ]:[null]
                                        }
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
.thumb{
    margin-top:1rem;
    max-width:100%;
    max-height: auto;
    cursor:pointer;
    display:flex;
    margin-right:5rem;
}
.thumb .img{
    
    margin-right:5rem;
}
.carousel-container{
    
    margin: auto;
    margin-top:5px;
    
  }
  .carousel-slide{
    display: flex;
    width: 100%;
    height: 100%;

  }
  .carousel-slide img{
    height: 50px;
    width: 50px;
    margin:5px;
    transform: translate3d(0,0,0);
    -webkit-transform: translate3d(0,0,0);
    -webkit-transform: translateZ(3px);
    
    
    
  }
`;