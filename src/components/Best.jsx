import React from "react";
import best1 from "../assets/best1.png";
import best2 from "../assets/best2.png";
import best3 from "../assets/best3.png";
import best4 from "../assets/best4.png";
import Footer from "../components/Footer";
const Best = ()=>{
return(
    <>
    <h1 style={{marginTop:"30px",marginBottom:"30px"}}>Best from China</h1>
    <div>
    <img src={best1} style={{marginLeft:"70px"}}/>
    <img src={best2} style={{marginLeft:"170px"}}/>
    <img src={best3} style={{marginLeft:"170px"}}/>
    <img src={best4} style={{marginLeft:"170px"}}/>
    </div>
    <span style={{marginLeft:"60px"}}>Car Accessories</span>
    <span style={{marginLeft:"140px"}}>Audio & videos</span>
    <span style={{marginLeft:"150px"}}>Gadgets</span>
    <span style={{marginLeft:"170px"}}>Home & Liesure</span>

    <h1 style={{marginTop:"50px"}}>ZoodMall - Shop for Happiness</h1>
    <p>Welcome to a whole new world of shopping with our ZoodMall Website! Join our long list of happy customers and start shopping for your happiness, today! Download and start exploring through millions of products from Local and Cross Border sellers. With ZoodMall you will get: WIDE RANGE OF PRODUCTS Discover millions of products from around the world, including International, Chinese, and local sellers. Browse with ease and shop from various categories like Clothing (Men and Women), Phones & Accessories, Computers & Electronics, General Accessories, and many more. DISCOUNTS AND COUPONS Benefit from tons of discounts on your purchase with our Promo Codes and Discount Coupons available upon registration, and new offers daily for existing users. DAILY FLASH DEALS Catch the BEST PRICE GUARANTEED by browsing through our 24-Hour Flash Deals, with brand new offers and products to choose from every day. OFFERS Explore our Offers section to catch our latest discounts on selected items or categories, and benefit from frequent promotions on a regular basis throughout the year. EASE OF SHOPPING Select from various available payment methods for every Country from Pay Online and Pay After Delivery, to Cash on Delivery and Installments (available in Uzbekistan). Track your orders in real-time, so you know exactly when you will receive it. Feel secure with our Local Return and Refund policy to make sure you are satisfied with every purchase. ZoodMall is powered by OrientSwiss the leading Marketplace platform based in Switzerland with regional offices across Silk Road countries. ZoodMall received the Award of</p>
  <Footer/>
    </>
)
}
export default Best;