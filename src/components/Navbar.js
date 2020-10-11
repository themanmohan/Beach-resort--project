import React, { Component } from 'react'
import logo from '../images/logo.svg';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';
export default class Navbar extends Component {

    state={
        isOpen:false
    }

    handleToggle=()=>{
        this.setState({
            isOpen:!this.state.isOpen
        })
    }
    render() {
        return (
            <nav className="navbar">{/*navbar begin*/}
             <div className="nav-center">
             <div className="nav-header">{/*nav-header begin*/}
             <Link to="/">
             <img src={logo} alt="Beach logo" />
             </Link>
             <button type="button" className="nav-btn" onClick={this.handleToggle}>
             <FaAlignRight className="nav-icon" />  
             </button>
             </div>{/*nav-header end*/}
                <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                    <li> <Link to="/" >Home </Link></li>
                    <li> <Link to="/rooms" >Room </Link></li>
                  

                </ul>
             </div>
            </nav> /*navbar end*/
        )
    }
}

