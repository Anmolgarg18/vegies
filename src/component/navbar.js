import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(props) {
return (
    <div>
       <header>
      <nav className="nav1">
         <div className="left">
         <Link to='/'><img
            src={require("../images/logo.png")}
            alt="logo"
           
          /></Link>
         </div>
         <div className="center">
              <i class="fa-solid fa-location-dot"></i>
            <span>Delivery in 30 mins</span>
              <form>
                    <input type="text" id="search" placeholder="eg:search'ginger'"></input>
                    <i class="fa-solid fa-magnifying-glass"></i>

                </form>
         </div> 
        <div className="right">
            <Link to='/login'><button type="submit" id="Login">
              Login
            </button ></Link>
            <Link to='/aboutus'><button type="submit" id="aboutus">
            About us
            </button></Link>
            <div onClick={() => props.handleShow(true)}>
            <i class="fa-solid fa-heart" id="Like"></i>
             <i class="fa-solid fa-cart-shopping" id="cart"></i>
             <sup>{props.count}</sup>
                <i class="fa-solid fa-user" id="user"></i>
            </div>
        </div>  
         </nav>
    </header>
    </div>
  );
}
