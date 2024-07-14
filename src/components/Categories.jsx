import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
const Categories = () =>{
    return(
        <>
        <h2 style={{paddingLeft:"120px"}}>
        Top Categories in 6 installments
        </h2>
        <div style={{display:"flex",paddingLeft:"160px",marginTop:"40px"}}>
            <img src={img1}/>
            <img src={img2} style={{paddingLeft:"50px"}}/>
            <img src={img3} style={{paddingLeft:"50px"}}/>
            <img src={img4} style={{paddingLeft:"50px"}}/> 
            <img src={img5} style={{paddingLeft:"50px"}}/> 
            <img src={img6} style={{paddingLeft:"50px"}}/> 
        </div>
        <div>
            <span style={{paddingLeft:"180px"}}>
                Earphones
            </span>
            <span style={{paddingLeft:"120px"}}>Mobiles</span>
            <span style={{paddingLeft:"130px"}}>Perfumes</span>
            <span style={{paddingLeft:"120px"}}>Gift sets</span>
            <span style={{paddingLeft:"120px"}}>Haircare</span>
            <span style={{paddingLeft:"120px"}}>Hygines</span>
        </div>
        <h2 style={{paddingLeft:"120px",marginTop:"40px"}}>AC & Fans in up to x12 Months</h2>

        </>
    )
}
export default Categories;