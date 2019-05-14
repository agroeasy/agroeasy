import React, { Component } from "react";
import { Button } from 'antd';

class Banner extends Component { 
    render() {
        return (
                <div id="banner" style={{height: 'auto', backgroundColor: '#106021', padding: '50px', textAlign: 'center', color: 'white',}}>
                    <h2 style={{color: 'white', paddingBottom: '20px',}}> Why You Need Us </h2>
                        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around',}}>
                            <div className="box" style={{width: '200px', display: 'block', textAlign: 'center', padding: '15px',}}>
                                <div style={{borderRadius:'15px', width: '50px', height: '50px', backgroundColor: 'white', margin: 'auto',}}>
                                     <i style={{ color: '#106021', fontSize: '20px', paddingTop: '15px', }} className="fa fa-car"></i>
                                </div>
                                <h3 style={{color: 'white',}}>Fast Delivery</h3>
                                <h5 style={{ color: 'white',}}><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                
                                </p></h5>
                            </div>

                            <div className="box" style={{width: '200px', display: 'block', textAlign: 'center',  padding: '15px',}}>
                                <div style={{borderRadius:'15px', width: '50px', height: '50px', backgroundColor: 'white', margin: 'auto',}}>
                                    <i style={{ color: '#106021', fontSize: '25px', paddingTop: '15px', }} className="fa fa-usd"></i>
                                </div>
                                <h3 style={{color: 'white',}}>Price Minimization</h3>
                                <h5 style={{ color: 'white',}}><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                
                                </p></h5>
                            </div>

                            <div className="box" style={{width: '200px', display: 'block', textAlign: 'center',  padding: '15px',}}>
                                <div style={{borderRadius:'15px', width: '50px', height: '50px', backgroundColor: 'white', margin: 'auto',}}>
                                    <i style={{ color: '#106021', fontSize: '20px', paddingTop: '15px', }} className="fa fa-trash"></i>
                                </div>
                                <h3 style={{color: 'white',}}>Reduce Food Wastage</h3>
                                <h5 style={{ color: 'white',}}><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                
                                </p></h5>
                            </div>

                            <div className="box" style={{width: '200px', display: 'block', textAlign: 'center',  padding: '15px',}}>
                                <div style={{borderRadius:'15px', width: '50px', height: '50px', backgroundColor: 'white', margin: 'auto',}}>
                                     <i style={{ color: '#106021', fontSize: '20px', paddingTop: '15px', }} className="fa fa-users"></i>
                                </div>
                                <h3 style={{color: 'white',}}>Social Economic Driven</h3>
                                <h5 style={{ color: 'white',}}><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                
                                </p></h5>
                            </div>
                        </div>
                        <Button>Learn More</Button>
                    </div>
        );
    }
}

export default Banner;

