React
import React from "react";

import Footer from "@/components/footer";
import About from "./about/page";
import { Header } from "@/components/header";
import Hero from "@/components/hero";
import Account from "./account/page";
import Blog from "./blog/page";
import Cart from "./cart/page";
import Checkout from "./checkout/page";
import ContactSection from "./contact/page";
import Shop from "./shop/page";
import CartPage  from "./shop/asguardsofa/cartside/page";
import asguardsofa from "./shop/asguardsofa/page";





export default function Home (){
return(
    <div>
        <div><Header/></div>   
        <div><Hero/></div>
        <div><Footer/></div>  
    </div>
    
    
   
)
}