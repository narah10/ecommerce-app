import React, {useContext} from "react";
import Header from "../components/Header";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product"
import style from "./home.module.css"


function Home() {
    const { products } = useContext(ProductContext);
    const filteredProducts  = products.filter(item=>{
    return item.category === "men's clothing" || item.category === "women's clothing"
    })
    return(
        <div>
            <Header/>
            <section className={style.productContainer}>
                    <div className={style.individual}>
                    {filteredProducts.map(product => {
                        return <Product product={product} key={product.id}/>
                    })}
                    </div>
            </section>
            
        </div>
    )
}

export default Home;