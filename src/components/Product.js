import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import styles from "./product.module.css"
const Product = ({product}) => {
  console.log(product);
  //destrcuture producs
  const {id, image, category, title, price} = product
  return(
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Link className={styles.link} to={`/product/${id}`}>
                <img className={styles.images} src={image} alt = ''/>
            </Link>
        </div>
        <div className={styles.text}>
            <div className={styles.category}>{category}</div>
            <Link className={styles.link} to={`/product/${id}`}><h2 className={styles.title}>{title}</h2></Link>
            <div className={styles}>$ {price}</div>
        </div>
  </div>
  ) 
}; 

export default Product;