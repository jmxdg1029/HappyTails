import React, { Component } from 'react';
import NavBar from 'react-bootstrap/NavBar';
import menuImg from '../components/images/menu.png';
import '../components/NavTool.css';

class NavTool extends React.Component {
    render(){
        return (
             <label clasName="open">
                    <NavBar sticky="top" >
                        <div className="m-1 ml-5 f-size">
                        <input type='checkbox' />
                            <span  className="menu ">
                                <span className='hamburger'><img src={menuImg} /></span>
                            </span>
                        <ul>
                            <li><a href="#" >WHAT IS IT</a></li>
                            <li><a href="#">PERKS</a></li>
                            <li><a href="#"> PRICING</a></li>
                        </ul>
                        <NavBar.Brand className="text-white  navTitle m-5" ><h2>HAPPY TAILS</h2></NavBar.Brand>
                        </div>
                        
                    </NavBar>
                </label>
        );
    }
}

export default NavTool;
