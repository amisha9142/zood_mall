import React, { useState } from 'react';
import Trend from '../components/Trend';
const carProducts = [
  {
    productName: "Sedan Car",
    price: 25000,
    discountRate: "5%",
    imageUrl: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwY2xlYW5pbmd8ZW58MHx8MHx8fDA%3D"
  },
  {
    productName: "SUV Car",
    price: 35000,
    discountRate: "8%",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzhyVGwxXO2KPKJMxOWCWQUx77Cifp8RcN6LgJX3WA3WdNCgGD9aqJ89ImQ0YAxYOYTQ&usqp=CAU"
  },
  {
    productName: "Hatchback Car",
    price: 20000,
    discountRate: "3%",
    imageUrl: "https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D"
  },
  {
    productName: "Convertible Car",
    price: 45000,
    discountRate: "10%",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pUyNwG5H9jx15EO62Qwc4BDgt8WeHtKoSLgptRS7D-hRHDxN81SwUk5_EQdLsh_IYkI&usqp=CAU"
  },
  {
    productName: "Electric Car",
    price: 40000,
    discountRate: "7%",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuxXPygXZMmJFawS4ROoamSpvmn7Jgr1moxI-BUUz1vuyWmJjSCo1deR18HL7qBImQF6s&usqp=CAU"
  },
  {
    productName: "Sports Car",
    price: 60000,
    discountRate: "15%",
    imageUrl: "https://images.unsplash.com/photo-1551557479-80682eb12a86?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhciUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fHww"
  },
  {
    productName: "Luxury Car",
    price: 80000,
    discountRate: "12%",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9lzRGa6-D19SjLL02GCj4Se3vh0MNcssKjsYbscYLxv10GBSx7TRVkkBj_E6VxqQ5m20&usqp=CAU"
  },
  {
    productName: "Pickup Truck",
    price: 35000,
    discountRate: "8%",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHe9lMXhVwAVBX-yn6felnZsXN6DQqUi1iBYf6HyKYkk9c2d44JG3HE7bIZa2V0XjpUjg&usqp=CAU"
  },
  {
    productName: "Minivan",
    price: 30000,
    discountRate: "6%",
    imageUrl: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwY2xlYW5pbmd8ZW58MHx8MHx8fDA%3D"
  },
  {
    productName: "Crossover Car",
    price: 30000,
    discountRate: "6%",
    imageUrl: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwY2xlYW5pbmd8ZW58MHx8MHx8fDA%3D"
  }
];

const CarProductCard = ({ product }) => {
  return (
    <div className="car-product-card">
      <img src={product.imageUrl} alt={product.productName} />
      <div className="car-product-name">{product.productName}</div>
      <div className="car-product-price">${product.price.toFixed(2)}</div>
      <div className="car-product-discount">Discount: {product.discountRate}</div>
    </div>
  );
};

const CarProductList = () => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  const productsToShow = showAll ? carProducts : carProducts.slice(0, 5);

  return (
    <div>
      <div className="car-product-container">
        {productsToShow.map(product => (
          <CarProductCard key={product.productName} product={product} />
        ))}
      </div>
      {!showAll && (
        <div className="show-all-container">
          <button onClick={handleShowAll}>Show All</button>
        </div>
      )}
      <Trend/>
    </div>
  );
};

export default CarProductList;
