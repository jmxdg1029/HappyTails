import React, { Component } from 'react';
import NavBar from 'react-bootstrap/NavBar';
import title from '../components/images/title_nobg.PNG'
import '../components/NavTool.css';

class NavTool extends React.Component {
    render(){
        return (
             <div clasName="open">
                    <NavBar sticky="top" >
                        <div className="container">
                        <NavBar.Brand className="text-white  navTitle " ><img src={title}/></NavBar.Brand>
                        </div>
                    </NavBar>
                </div>
        );
    }
}

export default NavTool;
