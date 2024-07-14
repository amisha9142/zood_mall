import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data";
import { BsFillCartCheckFill } from "react-icons/bs";
import ImageScroller from "../components/ImageScroller";
import { FaRegHeart } from "react-icons/fa";
import image7 from "../assets/image7.png";
import RealTimeButtons from "../components/time";
import Frame from "../components/frame";
import image13 from "../assets/image13.png";
import image14 from "../assets/image14.png";
import image15 from "../assets/image15.png";
import image16 from "../assets/image16.png";
import image17 from "../assets/image17.png";
import image18 from "../assets/image18.png";
import image19 from "../assets/image19.png";
import image20 from "../assets/image20.png";
import { FaRegEye } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";  
import { RiContactsLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import Signin from "../components/Signin"; 

const Navbar = ({ setData, cart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [showSignInForm, setShowSignInForm] = useState(false);

  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    setData(element);
  };

  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
    setData(element);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  const toggleSignInForm = () => {
    setShowSignInForm(!showSignInForm);
    
  };


  return (
    <>
      <header className="sticky-top">
        <div
          style={{
            backgroundColor: "#FFD200",
            height: "35px",
            paddingTop: "5px",
          }}
        >
          <span style={{ paddingLeft: "100px" }}><FaRegEye />&nbsp;Hot Deals</span>
          <span style={{ paddingLeft: "50px" }}><CiStar />&nbsp;Top Categories</span>
          <span style={{ paddingLeft: "50px" }}><CiUnlock />
          &nbsp;Sell on zood</span>
          <span style={{ paddingLeft: "600px",cursor:"pointer" }}>EN&nbsp; <IoIosArrowDown /></span>
          <span style={{ paddingLeft: "20px" ,cursor:"pointer"}}   onClick={toggleSignInForm}><RiContactsLine />
&nbsp;        Signin</span>
        </div>
        <div className="nav-bar">
          <Link
            to={"/"}
            className="brand"
            style={{
              paddingTop: "10px",
              color: "#4B1B78",
              paddingLeft: "100px",
            }}
          >
            Zood Mall
          </Link>

          <form
            onSubmit={handleSubmit}
            className="search-bar"
            style={{ paddingLeft: "40px" }}
          >
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search Products"
              style={{
                height: "50px",
                borderRadius: "10px",
                paddingLeft: "15px",
              }}
             
            />
             
          </form>

          <Link to={"/cart"} className="cart">
            <FaRegHeart style={{ color: "black" }} />
            <button
              type="button"
              className="btn btn-primary position-relative"
              style={{ marginTop: "10px", marginLeft: "20px" ,width:"70px"}}
            >
              <BsFillCartCheckFill style={{ fontSize: "1.5rem" }} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </div>

        {location.pathname == "/" && (
          <div className="nav-bar-wrapper">
            <div onClick={() => filterByCategory("mobiles")} className="items">
              Mobiles
            </div>
            <div
              onClick={() => filterByCategory("laptops")}
              className="items"
              style={{ paddingLeft: "100px" }}
            >
              Laptops
            </div>
            <div
              onClick={() => filterByCategory("tablets")}
              className="items"
              style={{ paddingLeft: "100px" }}
            >
              Tablets
            </div>
          </div>
        )}
      </header>
      <ImageScroller />


      <div style={{ marginTop: "50px", marginLeft: "230px", display: "flex" }}>
        <img src={image13} />
        <img src={image14} style={{ marginLeft: "190px" }} />
        <img src={image15} style={{ marginLeft: "190px" }} />
        <img src={image16} style={{ marginLeft: "190px" }} />
        <br />
      </div>
      <span style={{ paddingLeft: "220px" }}>Local Sellers</span>
      <span style={{ paddingLeft: "150px" }}>Samsung Installments</span>
      <span style={{ paddingLeft: "150px" }}>smart Phones</span>
      <span style={{ paddingLeft: "180px" }}>Laptops</span>

      <div style={{ marginTop: "50px", marginLeft: "230px", display: "flex" }}>
        <img src={image17} />
        <img src={image18} style={{ marginLeft: "190px" }} />
        <img src={image19} style={{ marginLeft: "190px" }} />
        <img src={image20} style={{ marginLeft: "190px" }} />
        <br />
      </div>
      <span style={{ paddingLeft: "220px" }}>Comin Insurance</span>
      <span style={{ paddingLeft: "185px" }}>TV</span>
      <span style={{ paddingLeft: "240px" }}>Fans</span>
      <span style={{ paddingLeft: "230px" }}>pools</span>



      <img src={image7} style={{ paddingLeft: "130px", marginTop: "50px" }} />
      <div
        style={{
          marginTop: "50px",
          backgroundColor: "#FFB800",
          borderRadius: "20px",
          width: "1100px",
          marginLeft: "130px",
          height: "300px",
        }}
      >
        <h1 style={{ color: "white", padding: "20px" }}>
          Hero Deals up to 6 installments
        </h1>
        <RealTimeButtons />
      </div>

      <Frame />
      {showSignInForm && <Signin onClose={toggleSignInForm} />}

    

    </>
  );
};

export default Navbar;


