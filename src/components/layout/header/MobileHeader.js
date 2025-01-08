import {React,useState} from "react";
import '../../../assets/styles/header/MobileHeader.css';

import mobileHeaderLogo from '../../../assets/images/Header/soylent logo.jpeg';
import mobileHamIcon from '../../../assets/images/Header/ham-button.png';
import mobileAccount from '../../../assets/images/Header/account-icon.jpeg'
import mobileCart from '../../../assets/images/Header/cart-logo.jpeg';
import xIcon from '../../../assets/images/Header/x-icon.jpg'

function MobileHeader(){

    const [HamIconImg,SetHamIconImg] = useState(mobileHamIcon);
    

    const toggleHamMenu = (event) => {

        let hamMenu = document.querySelector('.ham-menu');

        let hamIconVar;

        if(hamMenu.style.display==="none"){
            hamMenu.style.display="block"
            hamIconVar=xIcon;
            SetHamIconImg(hamIconVar);
        }
        else if(hamMenu.style.display==="block"){
            hamMenu.style.display="none";
            hamIconVar=mobileHamIcon;
            SetHamIconImg(hamIconVar);
        }

    }

    return(
        <div className="mobile-header">
            <div className='mobile-header-button-con'>
                <button className="ham-button" onClick={(event) => toggleHamMenu(event)}><img src={HamIconImg}></img></button>
            </div>
            <div className='mobile-header-logo-con'>
                <a href="#"><img src={mobileHeaderLogo}></img></a>
            </div>
            <div className="mobile-account">
                <a href="#"><img src={mobileAccount}></img></a>
                <a href="#"><img src={mobileCart}></img></a>
            </div>
        </div>
    )
};

export default MobileHeader;