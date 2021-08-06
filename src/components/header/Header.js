import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBasket } from '@material-ui/icons';
import './Header.css';
import { useContextValue } from '../../context/Provider';
import { auth } from '../../firebase/firebase';

const Header = () => {

    const [ {basket, user}, dispatch ] = useContextValue();

    const handleAuth = () =>{
        if(user){
            auth.signOut();
        }
    }

    const userTag = () =>{
        if(user){
            return user.email.split("@")[0]
        }
    }

    return (
        <nav className="header">
            <Link to="/">
                <img 
                    className="header__logo" 
                    height="150px"
                    src="https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png"
                    alt="logo"
                />
            </Link>

            <div className="header__search">
                <input className="header__searchBar" placeholder="Search for something..."/>
                <Search className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link">
                    <div className="header__option" onClick={handleAuth}>
                        <span>Hello{` `}{user ? userTag() :''},</span>
                        <span>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>                
                </Link>
            </div>

            <div className="header__nav">
                <Link to="/orders" className="header__link">
                    <div className="header__option">
                        <span>Returns</span>
                        <span>& Orders</span>
                    </div>                
                </Link>
            </div>

            <div className="header__nav">
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span>Your</span>
                        <span>Prime</span>
                    </div>                
                </Link>
            </div>

            <Link to="/checkout" className="header__link">
                <div className="header__btn">
                    <ShoppingBasket/>
                    <span>{basket?.length}</span>
                </div>
            </Link>
        </nav>
    )
}

export default Header
