import React, { useState } from 'react';
import CarProductList from '../components/CarProductList';
const acProducts = [
  {
    productName: "Window AC 1.5 Ton",
    price: 349.99,
    discountRate: "10%",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr5qPgYrWcQPB7xdHfwi1O9CcdPeqssXbhduXqMTiV9iGa38lNW9rvERKSmpIfJNlKb3Y&usqp=CAU"
  },
  {
    productName: "Split AC 1 Ton",
    price: 499.99,
    discountRate: "15%",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2OY_LD6KRABWqWbFuQRZM-H90plQGeIJrGw&s"
  },
  {
    productName: "Portable AC 1.2 Ton",
    price: 399.99,
    discountRate: "12%",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDG0DeYvOmWbeUvMeaTFDvY_an50kwiOHRR-UYG4lgsVw3j5TuT-zPWk6Z36ObU-13X8g&usqp=CAU"
  },
  {
    productName: "Inverter AC 1.5 Ton",
    price: 599.99,
    discountRate: "18%",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6t6mx1vm74HmNT11v9PhVQMEJoJut_u2CIdczVj3N7Xg02cD9abdh8nPUHP67z32Hw58&usqp=CAU"
  },
  {
    productName: "Cassette AC 2 Ton",
    price: 799.99,
    discountRate: "20%",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeXFW0mE6xd3gxvJbqUjyCeiMBhyIRx23_HaXrl0PB8tqCuil0uhV7lzciBNckuS9Q2o4&usqp=CAU"
  },
  {
    productName: "Ducted AC 3 Ton",
    price: 1199.99,
    discountRate: "25%",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr5qPgYrWcQPB7xdHfwi1O9CcdPeqssXbhduXqMTiV9iGa38lNW9rvERKSmpIfJNlKb3Y&usqp=CAU"
  },
  {
    productName: "VRF AC 4 Ton",
    price: 1599.99,
    discountRate: "22%",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFpi9wd5-Mr0_NiHDwMSUiFMZwnt_ImuXlNqSX-GzU01gmoGzW6KOTfsPFn780WgkJ3FY&usqp=CAU"
  },
  {
    productName: "Floor Standing AC 2 Ton",
    price: 899.99,
    discountRate: "17%",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCsKVwQsAH7twztmh_LTHslyhchKaiGqNTpT-z1q55Mra_CSA4mZ9YbIEO9EIBL6PXd24&usqp=CAU"
  },
  {
    productName: "Window AC 2 Ton",
    price: 499.99,
    discountRate: "8%",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeXFW0mE6xd3gxvJbqUjyCeiMBhyIRx23_HaXrl0PB8tqCuil0uhV7lzciBNckuS9Q2o4&usqp=CAU"
  },
  {
    productName: "Split AC 2 Ton",
    price: 699.99,
    discountRate: "14%",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr5qPgYrWcQPB7xdHfwi1O9CcdPeqssXbhduXqMTiV9iGa38lNW9rvERKSmpIfJNlKb3Y&usqp=CAU"
  }
];

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.productName} />
      <div className="product-name">{product.productName}</div>
      <div className="product-price">${product.price.toFixed(2)}</div>
      <div className="product-discount">Discount: {product.discountRate}</div>
    </div>
  );
};

const ProductList = () => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  const productsToShow = showAll ? acProducts : acProducts.slice(0, 5);

  return (
    <div>
      <div className="product-container">
        {productsToShow.map(product => (
          <ProductCard key={product.productName} product={product} />
        ))}
      </div>
      {!showAll && (
        <div className="show-all-container">
          <button onClick={handleShowAll} style={{marginBottom:"20px"}}>Show All</button>
        </div>
      )}
      <h1 style={{paddingLeft:"120px"}}>Car Products in up to x12 Months</h1>
      <CarProductList/>
    </div>
  );
};

export default ProductList;
