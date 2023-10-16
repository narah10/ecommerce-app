import React, {useContext} from 'react';
import {useParams} from 'react-router-dom'
import { ProductContext } from '../contexts/ProductContext';
import style from "./product-detail.module.css"
import { Link } from 'react-router-dom';

const ProductDetails = () => {
    const {id} = useParams()
    const {products} = useContext(ProductContext)
    const product = products.find((item) => {
        return item.id === parseInt(id);
    });

    if (!product) {
        return(
            <section style={{textAlign: 'center', margin: '5rem auto'}}> Loading...</section>
        )
    }

    const {title, price, description, image, category} = product;
  return (
  <section className={style.container}>
    <div className={style.imageContainer}>
        <img src={image} alt=''/>
    </div>
    <div className={style.text}>
        <h2>{category}</h2>
        <h1>{title}</h1>
        <p>{description}</p>
        <p className={style.price}>$ {price}</p>
        <button>Add to Cart</button>
        <Link className={style.return} to='/'><button>RETURN</button></Link>
    </div>
  </section>
  );
};

export default ProductDetails;