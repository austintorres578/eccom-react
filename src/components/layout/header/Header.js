import {React,useState} from 'react';

import '../../../assets/styles/header/Header.css';

import ShopDropDown from './Header-dropdowns/ShopDropDown';
import HealthDropDown from './Header-dropdowns/HealthDropDown';
import AboutDropDown from './Header-dropdowns/AboutDropDown';
import MobileHeader from './MobileHeader';
import HamMenu from './HamMenu';

import HeaderLogo from '../../../assets/images/Header/soylent logo.jpeg';
import AccountLogo from '../../../assets/images/Header/account-icon.jpeg';
import CartLogo from '../../../assets/images/Header/cart-logo.jpeg';

import InstagramLogo from '../../../assets/images/Header/instagram-logo.jpeg';
import TiktokLogo from '../../../assets/images/Header/tiktok-logo.jpeg';
import RedditLogo from '../../../assets/images/Header/reddit-logo.jpeg';
import AmericanFlag from '../../../assets/images/Header/american-flag.jpeg';

import HalfStar from '../../../assets/images/Header/Half_Star.png';
import FullStar from '../../../assets/images/Header/Full_Star.png';

import BlueShopImg from '../../../assets/images/Header/blue-shop-img.png';
import YellowShopImg from '../../../assets/images/Header/yellow-shop-img.png';
import OrangeShopImg from '../../../assets/images/Header/orange-shop-img.png';
import GreenShopImg from '../../../assets/images/Header/green-shop-img.png';
import BrownShopImg from '../../../assets/images/Header/brown-shop-img.png';




function Header(){

    const [CurrentDropDown,SetCurrentDropdown] = useState(null);

    const [ButtonSliderText,SetButtonSliderText] = useState(<p className="shipping-orders">get free shipping in orders over $50!</p>)

    let changeButtonSliderText = (event) =>{

        let sliderTextClass = event.target.parentNode.children[1].children[0].className

        let newSliderText;
        
        if(sliderTextClass==='shipping-orders'){
            newSliderText = 
            <div className="star-flex">
                <p>over 18,000</p>
                <div>
                    <img src={FullStar}></img>
                    <img src={FullStar}></img>
                    <img src={FullStar}></img>
                    <img src={FullStar}></img>
                    <img src={HalfStar}></img>
                </div>
                <p>reviews!</p>
                <a href="#">see reviews</a>
            </div>;
            SetButtonSliderText(newSliderText)
        }else{
            newSliderText=<p className="shipping-orders">get free shipping in orders over $50!</p>;
            SetButtonSliderText(newSliderText);
        }

    }

    let moveNavDropdown = (event,direction) =>{

        let dropdown;

        let navLinkText

        let navDrop = document.querySelector('.nav-dropdown-con');

        if(direction==='up' && navDrop){
            navDrop.style.top="-500%";
        }else if(direction==='down' && navDrop){
            navDrop.style.top="100%";
            navLinkText = event.target.innerText;
        }

        if(navLinkText==="SHOP"){
            dropdown=<ShopDropDown/>
            SetCurrentDropdown(dropdown)
        }else if(navLinkText==="HEALTH BENEFITS"){
            dropdown=<HealthDropDown/>
            SetCurrentDropdown(dropdown)
        }
        else if(navLinkText==="ABOUT"){
            dropdown=<AboutDropDown/>
            SetCurrentDropdown(dropdown)
        }

        console.log(navLinkText)

    };

    let intervalId;

    let intervalTime = 5000; 

    function startLogging() {
        clearInterval(intervalId); // Clear any existing interval
        intervalId = setInterval(() => {
          console.log("hi");
        }, intervalTime);
    }

    return(
        <header>
            <div className='top-nav'>
                <div className='top-nav-socials'>
                    <a href='#'><img src={InstagramLogo}></img></a>
                    <a href='#'><img src={TiktokLogo}></img></a>
                    <a href='#'><img src={RedditLogo}></img></a>
                </div>
                <div className='top-nav-slider'>
                    <button onClick={(event)=>changeButtonSliderText(event)}>‹</button>
                    <div>
                        {ButtonSliderText}
                    </div>
                    <button onClick={(event)=>changeButtonSliderText(event)}>›</button>
                </div>
                <div className='store-locator'>
                    <a href="#" className="store-locator-link">Store Locator</a>
                    <img className='flag-icon' src={AmericanFlag}></img>
                    <div className='flag-con'>
                        <a className='united-states-link' href='#'>United States</a>
                        <a className='canada-link' href='#'>Canada</a>
                        <a className='global-link' href="#">Global</a>
                    </div>
                </div>
            </div>
            <div className='main-nav'>
                <a href='/' className='header-logo'>
                    <img src={HeaderLogo}></img>
                </a>
                <ul className='desk-nav'>
                    <li onPointerOver={(event) => moveNavDropdown(event,'down')} onPointerLeave={(event) => moveNavDropdown(event,'up')}><a href='#'>Shop</a></li>
                    <li onPointerOver={(event) => moveNavDropdown(event,'down')} onPointerLeave={(event) => moveNavDropdown(event,'up')}><a href='#'>Health Benefits</a></li>
                    <li onPointerOver={(event) => moveNavDropdown(event,'down')} onPointerLeave={(event) => moveNavDropdown(event,'up')}><a href='#'>About</a></li>
                    <li><a href='#'>Why Soy?</a></li>
                    <li><a href='#'>Clinical Trials</a></li>
                    <li><a href='#'>Reviews</a></li>
                    <li><a href='#'>Product Quiz</a></li>
                </ul>
                <div className='nav-account-icons'>
                    <a href='#'><img src={AccountLogo}></img></a>
                    <a href='#'><img src={CartLogo}></img></a>
                </div>
            </div>
            <div className='tablet-nav-con'>
                <ul className='tablet-nav'>
                    <li><a href='#'>Shop</a></li>
                    <li><a href='#'>Health Benefits</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Why Soy?</a></li>
                    <li><a href='#'>Clinical Trials</a></li>
                    <li><a href='#'>Reviews</a></li>
                    <li><a href='#'>Product Quiz</a></li>
                </ul>
            </div>
            <div className='nav-dropdown-con' onPointerOver={(event) => moveNavDropdown(event,'down')} onPointerLeave={(event) => moveNavDropdown(event,'up')}>
                {CurrentDropDown}
            </div>
            <MobileHeader />
            <HamMenu />
    
        </header>
    )
}

export default Header;