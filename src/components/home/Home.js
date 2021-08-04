import React from 'react';
import Products from '../products/Products';
import './Home.css';


const Home = () => {
    return (
        <div className="home">
            <img className="home__image" alt="..." src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Xiaomi/Events/July/MSD/Uber/D26217342_IN_WLD_MSD_Mi_Redmi_Uber_DesktopTallHero_1500x600._CB645031977_.jpg" />
            <Products />
        </div>
    )
}

export default Home