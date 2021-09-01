import React from 'react'
import Product from './Product'
import './Product.css'

const products = [
    {
        id: "1234567",
        title: "Logitech Mouse",
        price: 800,
        rating: 4,
        imageUrl: "https://m.media-amazon.com/images/I/51kdFjyPRAL._AC_SY400_.jpg"
    },
    {
        id: "1234567",
        title: "HP Desktop",
        price: 40000,
        rating: 3,
        imageUrl: "https://m.media-amazon.com/images/I/41n9dktha1L.__AC_SY400_.jpg"
    },
    {
        id: "1234567",
        title: "OnePlus Nord 2",
        price: 29999,
        rating: 5,
        imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/41Gsj-Q-zOS._AC_SX368_.jpg"
    },
    {
        id: "1234567",
        title: "Samsung Galaxy S21",
        price: 110000,
        rating: 5,
        imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/51z1fXZ93bL._AC_SX368_.jpg"
    },
    {
        id: "1234567",
        title: "Panasonic Camera",
        price: 44000,
        rating: 5,
        imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/91xnO7qHAeL._AC_UL200_SR200,200_.jpg"
    },
    {
        id: "1234567",
        title: "Sony Camera",
        price: 100000,
        rating: 4,
        imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/71UyYz8KBVL._AC_UL200_SR200,200_.jpg"
    },
    {
        id: "1234567",
        title: "Canon Camera",
        price: 90000,
        rating: 3,
        imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/61HRnUdvv6L._AC_UL200_SR200,200_.jpg"
    },
    {
        id: "1234567",
        title: "LG Smart TV",
        price: 18999,
        rating: 4,
        imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/71uKCdULRgL._AC_UL200_SR200,200_.jpg"
    },
    {   
        id: 100,
        title: "Keyboard",
        price: 2850,
        rating: 3,
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71V7D-quLsS.__AC_SY300_SX300_QL70_FMwebp_.jpg",
    }
]

const Products = () => {
    return (
        <div className="products_row">
            {products.map((product, idx) => (
                <Product
                    key={idx}
                    id={idx}
                    title={product.title}
                    price={product.price}
                    rating={product.rating}
                    imageUrl={product.imageUrl}
                /> 
            ))}
        </div>
    )
}

export default Products
