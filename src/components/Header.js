import React, { Component } from 'react';
import './Header.css'
import { IoIosMail, IoMdCall } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { MdDateRange } from "react-icons/md"
import Clock from 'react-live-clock';
import WeatherAPI from './WeatherAPI';

class Header extends Component {
    state={
        welcomeMessage:''
    }
    componentDidMount=()=>{
        var isNoon = new Date().toLocaleString().endsWith("PM");
        var message='';
        isNoon?message='Good Afternoon !':message='Good Morning !';
        this.setState({welcomeMessage:message})
        console.log(isNoon);
        console.log(new Date().toLocaleString());
    }
   

    render() {
        return (
            <div className='header row'>
                <div className='col' style={{ color: "white", }}>
                    <div className='row'>
                        <div className='col' style={{ paddingTop: "8%" }}>
                            <MdDateRange /> &nbsp;
                            <Clock
                                format={'DD MMMM YYYY h:mm:ss A'}
                                ticking={true} />
                        </div>
                        <div className='col' style={{ paddingTop: "2%" }}>
                            <WeatherAPI />

                        </div>

                    </div>


                </div>
                <div className='header-text col'>
                    {this.state.welcomeMessage}
                </div>
                <div className='col' style={{ color: "white", paddingTop: "20px" }}>
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