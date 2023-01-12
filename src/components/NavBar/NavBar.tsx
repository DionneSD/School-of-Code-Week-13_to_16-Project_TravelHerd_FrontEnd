// import react from "react";
//import {  Link } from "react-router-dom";
import "./NavBar.css";
import AuthButtons from "../AuthButtons/AuthButtons";
import Dashboard from "../Dashboard/dashboard";

const Navbar = ({ pageSelect }: any) => {
  return (
    <nav>
      <h2>Travel Herd</h2>
      <li className="menu-item">
        <button onClick={() => {pageSelect("dashboard")}}>dashboard</button>
      </li>
      <li className="menu-item">
      <button onClick={() => {pageSelect("join")}}>join</button>
      </li>
      <li>
      <button onClick={() => {pageSelect("view")}}>view</button>
      </li>
      <li>
      <button onClick={() => {pageSelect("create")}}>create</button>
      </li>
      <div>
        <AuthButtons />
      </div>
      {/* <button className ="button-24">Log in</button> */}
    </nav>
  );
};

export default Navbar;

// import React from "react";
// import { Nav, NavLink, NavMenu }
//  	from "./NavBarElements.js"

// const Navbar = () => {
// return (
// 	<>
// 	<Nav>
// 		<NavMenu>
// 		<NavLink to="/Dashboard" activeStyle>
// 			About
// 		</NavLink>
// 		<NavLink to="/contact" activeStyle>
// 			Contact Us
// 		</NavLink>
// 		<NavLink to="/blogs" activeStyle>
// 			Blogs
// 		</NavLink>
// 		<NavLink to="/sign-up" activeStyle>
// 			Sign Up
// 		</NavLink>
// 		</NavMenu>
// 	</Nav>
// 	</>
// );
// };

// export default Navbar;
