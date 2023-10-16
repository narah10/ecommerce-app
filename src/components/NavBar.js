import React from "react";
import { Link } from 'react-router-dom';
import nav from './nav.module.css'
import { BiCart, BiHeart} from "react-icons/bi";

function NavBar() {
    return(
        <div className={nav.contain}>
            <div className={nav.contains}>
                <div className={nav.container}>
                    <Link className={nav.links}to='/'><h1>Ecommerce ShopFall</h1></Link>
                </div>
                <div className={nav.icons}>
                    <BiHeart className={nav.heart}/>
                    <BiCart className={nav.cart}/>
                    </div>
            </div>
        </div>

    )
}
 export default NavBar;