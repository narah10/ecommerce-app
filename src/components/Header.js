import React from "react";
import header from './header.module.css'
import heroImage from '../assets/hero.jpg' 

function Header() {
    return(
        <div className={header.container}>
            <div className={header.heading}>
                <h1>ShopFall</h1>
                <div>
                    <h2>SHOP AUTUMN STYLES</h2>
                    <h3>MEN & WOMEN</h3>
                    <button className={header.startButton}><a href='#'>Start Shopping</a></button>
                </div>
            </div>
            <div>
                <img className={header.image} src={heroImage}/>
            </div>
            
        </div>
    )
}

export default Header