import React, { Component } from 'react';
import './Header.css'
import { IoIosMail, IoMdCall } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import {MdDateRange} from "react-icons/md"
import Clock from 'react-live-clock';

class Header extends Component {
    render() {
        return (
            <div className='header row'>
                <div className='col' style={{ color: "white",paddingTop:"3%"}}>
                    <MdDateRange/> &nbsp;
                    <Clock 
                        format={'dddd, DD MMMM YYYY, h:mm:ss A'}
                        timezone={'GMT/UTC '} ticking={true} />
                </div>
                <div className='header-text col'>
                    Hello Visitors !
                </div>
                <div className='col' style={{ color: "white", paddingTop: "15px" }}>
                    <AiOutlineHome />&nbsp; New Ashok Nagar, New Delhi<br />
                    <IoIosMail /> &nbsp; nrjsrivastav100@yahoo.com  <br />
                    <IoMdCall /> &nbsp; +91- 8284955191
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                </div>


            </div>
        );
    }
}

export default Header;