import React, { useState, useEffect, Component } from 'react';
import logo from '../assets/logo_vertical.png'
import TweenMax from 'gsap'
import $ from 'jquery'
import { Power2 } from "gsap";




export default function Services() {





    return (
        <div>
            <div class=" uk-hidden@m uk-padding uk-text-center" style={{ width: "100vw", backgroundColor: "#0A1623" }}>
                <img id="lo" style={{ marginTop: "15px", height: "50px", width: "50px", opacity: "1" }} src={logo}></img>

                <h3 class="uk-animation-fade" style={{ marginTop: "5px", color: 'white', fontWeight: "lighter" }}>SERVICES</h3>
                <div class="uk-visible@l" style={{ marginLeft: "48.3%", width: "45px", height: "2px", backgroundColor: "#2F3C4D" }} ></div>
                <div class="  uk-animation-slide-right ">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</div>




                <div style={{ padding: "0% 10% 0% 10%", marginTop: "" }} class="uk-child-width-1-4@s uk-grid-match" uk-grid="true">

                    <div class=" uk-animation-fade-up" style={{ paddingBottom: "2%" }} >
                        <div style={{ backgroundColor: "rgba(30,41,53,.7)", borderRadius: "10px", height: "210px" }} class=" uk-card uk-card-default  uk-card-hover ">

                            <img style={{ marginTop: '30px' }} class=" uk-border-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIUZgp5epcxNfXXQEP1QW8wL4idUd07jtizq7QbdiCkTcYOXao" width="70" height="70" alt="Border circle" />
                            <p class=" " style={{ marginTop: '20px', color: "white" }}>Gallery</p>

                            <div class="uk-visible@l" style={{ width: "210px", height: "1px", backgroundColor: "#2F3C4D" }} ></div>
                            <p class=" " style={{ marginTop: "13px", color: "#B19011", fontSize: "13px" }}>LET'S DISCUSS</p>
                        </div>
                    </div>
                    <div class=" uk-animation-fade-up " style={{ paddingBottom: "2%" }}>
                        <div style={{ backgroundColor: "rgba(30,41,53,.7)", borderRadius: "10px", height: "210px" }} class=" uk-card uk-card-default  uk-card-hover ">

                            <img style={{ marginTop: '30px' }} class=" uk-border-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIUZgp5epcxNfXXQEP1QW8wL4idUd07jtizq7QbdiCkTcYOXao" width="70" height="70" alt="Border circle" />
                            <p class=" " style={{ marginTop: '20px', color: "white" }}>Branding</p>

                            <div class="uk-visible@l" style={{ width: "210px", height: "1px", backgroundColor: "#2F3C4D" }} ></div>
                            <p class=" " style={{ marginTop: "13px", color: "#B19011", fontSize: "13px" }}>LET'S DISCUSS</p>
                        </div>
                    </div >
                    <div class=" uk-animation-fade-up " style={{ paddingBottom: "2%" }}>
                        <div style={{ backgroundColor: "rgba(30,41,53,.7)", borderRadius: "10px", height: "210px" }} class=" uk-card uk-card-default  uk-card-hover ">

                            <img style={{ marginTop: '30px' }} class=" uk-border-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIUZgp5epcxNfXXQEP1QW8wL4idUd07jtizq7QbdiCkTcYOXao" width="70" height="70" alt="Border circle" />
                            <p class=" " style={{ marginTop: '20px', color: "white" }}>Photography</p>

                            <div class="uk-visible@l" style={{ width: "210px", height: "1px", backgroundColor: "#2F3C4D" }} ></div>
                            <p class=" " style={{ marginTop: "13px", color: "#B19011", fontSize: "13px" }}>LET'S DISCUSS</p>
                        </div>
                    </div>
                    <div class=" uk-animation-fade-up " style={{ paddingBottom: "2%" }}>
                        <div style={{ backgroundColor: "rgba(30,41,53,.7)", borderRadius: "10px", height: "210px" }} class="card uk-card uk-card-default  uk-card-hover ">

                            <img style={{ marginTop: '30px' }} class=" uk-border-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIUZgp5epcxNfXXQEP1QW8wL4idUd07jtizq7QbdiCkTcYOXao" width="70" height="70" alt="Border circle" />
                            <p class=" " style={{ marginTop: '20px', color: "white" }}>UI/UX</p>

                            <div class="uk-visible@l" style={{ width: "210px", height: "1px", backgroundColor: "#2F3C4D" }} ></div>
                            <p class=" " style={{ marginTop: "13px", color: "#B19011", fontSize: "13px" }}>LET'S DISCUSS</p>
                        </div>
                    </div>

                </div>






                <div style={{ backgroundColor: "transparent", height: "100px", zIndex: "-1" }}></div>

            </div>








            <div class=" uk-visible@m uk-padding uk-text-center" style={{ width: "100vw", backgroundColor: "transparent" }}>
                <h3 class="uk-animation-fade" style={{ marginTop: "40px", color: 'white', fontWeight: "lighter" }}>SERVICES</h3>
                <div class="uk-visible@l" style={{ marginLeft: "48.3%", width: "45px", height: "2px", backgroundColor: "#2F3C4D" }} ></div>
                <div class="para  uk-animation-slide-right ">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</div>


                <div style={{ padding: "0% 10% 0% 10%" }} class="uk-child-width-1-4@s uk-grid-match" uk-grid="true">

                    <div class=" uk-animation-slide-bottom" style={{ paddingBottom: "2%" }} >
                        <div style={{ backgroundColor: "rgba(30,41,53,.7)", borderRadius: "10px", height: "210px" }} class=" uk-card uk-card-default  uk-card-hover ">


                        </div>
                    </div>
                    <div class=" uk-animation-slide-bottom " style={{ paddingBottom: "2%" }}>
                        <div style={{ backgroundColor: "rgba(30,41,53,.7)", borderRadius: "10px", height: "210px" }} class=" uk-card uk-card-default  uk-card-hover ">


                        </div>
                    </div >
                    <div class=" uk-animation-slide-bottom " style={{ paddingBottom: "2%" }}>
                        <div style={{ backgroundColor: "rgba(30,41,53,.7)", borderRadius: "10px", height: "210px" }} class=" uk-card uk-card-default  uk-card-hover ">


                        </div>
                    </div>
                    <div class=" uk-animation-slide-bottom " style={{ paddingBottom: "2%" }}>
                        <div style={{ backgroundColor: "rgba(30,41,53,.7)", borderRadius: "10px", height: "210px" }} class="card uk-card uk-card-default  uk-card-hover ">


                        </div>
                    </div>

                </div>

                <div style={{ padding: "0% 10% 0% 10%", marginTop: "-230px" }} class="uk-child-width-1-4@s uk-grid-match" uk-grid="true">

                    <div class=" uk-animation-fade-up" style={{ paddingBottom: "2%" }} >
                        <div style={{ backgroundColor: "transparent", borderRadius: "10px", height: "210px" }} class=" uk-card uk-card-default  uk-card-hover ">

                            <img style={{ marginTop: '30px' }} class=" uk-border-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIUZgp5epcxNfXXQEP1QW8wL4idUd07jtizq7QbdiCkTcYOXao" width="70" height="70" alt="Border circle" />
                            <p class=" " style={{ marginTop: '20px', color: "white" }}>Gallery</p>

                            <div class="uk-visible@l" style={{ width: "210px", height: "1px", backgroundColor: "#2F3C4D" }} ></div>
                            <p class=" " style={{ marginTop: "13px", color: "#B19011", fontSize: "13px" }}>LET'S DISCUSS</p>
                        </div>
                    </div>
                    <div class=" uk-animation-fade-up " style={{ paddingBottom: "2%" }}>
                        <div style={{ backgroundColor: "transparent", borderRadius: "10px", height: "210px" }} class=" uk-card uk-card-default  uk-card-hover ">

                            <img style={{ marginTop: '30px' }} class=" uk-border-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIUZgp5epcxNfXXQEP1QW8wL4idUd07jtizq7QbdiCkTcYOXao" width="70" height="70" alt="Border circle" />
                            <p class=" " style={{ marginTop: '20px', color: "white" }}>Branding</p>

                            <div class="uk-visible@l" style={{ width: "210px", height: "1px", backgroundColor: "#2F3C4D" }} ></div>
                            <p class=" " style={{ marginTop: "13px", color: "#B19011", fontSize: "13px" }}>LET'S DISCUSS</p>
                        </div>
                    </div >
                    <div class=" uk-animation-fade-up " style={{ paddingBottom: "2%" }}>
                        <div style={{ backgroundColor: "transparent", borderRadius: "10px", height: "210px" }} class=" uk-card uk-card-default  uk-card-hover ">

                            <img style={{ marginTop: '30px' }} class=" uk-border-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIUZgp5epcxNfXXQEP1QW8wL4idUd07jtizq7QbdiCkTcYOXao" width="70" height="70" alt="Border circle" />
                            <p class=" " style={{ marginTop: '20px', color: "white" }}>Photography</p>

                            <div class="uk-visible@l" style={{ width: "210px", height: "1px", backgroundColor: "#2F3C4D" }} ></div>
                            <p class=" " style={{ marginTop: "13px", color: "#B19011", fontSize: "13px" }}>LET'S DISCUSS</p>
                        </div>
                    </div>
                    <div class=" uk-animation-fade-up " style={{ paddingBottom: "2%" }}>
                        <div style={{ backgroundColor: "transparent", borderRadius: "10px", height: "210px" }} class="card uk-card uk-card-default  uk-card-hover ">

                            <img style={{ marginTop: '30px' }} class=" uk-border-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIUZgp5epcxNfXXQEP1QW8wL4idUd07jtizq7QbdiCkTcYOXao" width="70" height="70" alt="Border circle" />
                            <p class=" " style={{ marginTop: '20px', color: "white" }}>UI/UX</p>

                            <div class="uk-visible@l" style={{ width: "210px", height: "1px", backgroundColor: "#2F3C4D" }} ></div>
                            <p class=" " style={{ marginTop: "13px", color: "#B19011", fontSize: "13px" }}>LET'S DISCUSS</p>
                        </div>
                    </div>

                </div>






                <div style={{ backgroundColor: "transparent", height: "100px", zIndex: "-1" }}></div>

            </div>
        </div>

    )
}

