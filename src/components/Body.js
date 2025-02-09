import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import PIC from '../images/Photo.jpg';
import './Body.css'
import SocialIcons from './SocialIcons' ;


class Body extends Component {
    handleClick =()=>{
        window.open("https://drive.google.com/file/d/1GBp8iiQso10gushtpQOnFwJejv79l72m/view?usp=sharing");
    }
    render() {
        return (
            <div>
                <section className="d-flex align-items-center">
                    <div className="container-fluid nav_bg">
                        <div className='row'>
                            <div className="container-fluid nav_bg">
                                <div className="row">
                                    <div className="col-lg-6 order-1 order-lg-2">
                                        <img style={{ width: "400px", paddingTop: "35px", height: "700px" }} src={PIC} alt="myPic img" />
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 ">
                                        <div style={{ paddingRight: "100px" }}>
                                            <h1 className='bodytext'>I'm Neeraj Srivastava</h1>
                                            <span className='text' >Technocrat & Full stack Developer </span><br /><br />
                                            <p>I Graduated in Mechanical Engineering from Lovely Professional University, Punjab, India.
                                                Right after passing out from college, I worked as a Service, Support and Sales Engineer for around 2 years with an Indian Distributor Partner of an
                                                Isralian Tech Giant called <b>Mobileye </b> in Delhi/NCR region.
                                            </p>
                                            <p>
                                                I entered in to the IT world in January 2019 and
                                                joined <b>Infosys Technologies</b> as a Software Engineer Trainee. After getting 3 months of
                                                training in different tech stacks like,  <i>Java - 8, Spring Boot, Python, SQL, Angular-7 and React JS, </i>
                                                I started my development career with Java - 8, Spring Boot and React js.
                                            </p>
                                            <p>
                                                After around 2.5 years working with Infosys, I moved to <b>IBM India</b> in search of better opportunities.
                                                And from August 2021 to June 2022, I worked as a Senior Software Engineer in IBM and worked with Projects involving <i>Azure Cloud</i> along with Java and SpringBoot.
                                            </p>
                                            <p>
                                                Currently, I am a part of <b>American Express India</b>. I work with Amex as Engineer II and am core into backend development.
                                                I work here with tech stacks like, <i>GCP, GraphiQL APIs, SpringBoot, OpenTracing, etc.</i>
                    
                                            </p>
                                            <b>I love tea and reading Spiritual & Mythological books.
                                                I like listning & writing Nazms, Shayaris and Gazals.
                                            </b>
                                            <div style={{paddingTop:"40px"}}>
                                                <SocialIcons/>
                                            </div>
                                            <div style={{paddingTop:"30px"}}>
                                                <button className='btn' onClick={this.handleClick}>Download Resume</button>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

            </div>
        );
    }
}

export default Body;