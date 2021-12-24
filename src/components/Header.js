import React, { Component } from 'react';
import './Header.css'
import { IoIosMail, IoMdCall} from "react-icons/io";
import {AiOutlineHome} from "react-icons/ai"

class Header extends Component {
    render() {
        return (
            <div className='header row'>
                <div className='header-text col'>
                    Hello Visitors !
                </div>
                <div className='col' style={{ color: "white",paddingTop:"15px" }}>
                    <AiOutlineHome/>&nbsp; New Ashok Nagar, New Delhi<br/>
                    <IoIosMail /> &nbsp; nrjsrivastav100@yahoo.com  &nbsp;<br/>
                    <IoMdCall /> &nbsp; +91- 8284955191 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                </div>


            </div>
        );
    }
}

export default Header;