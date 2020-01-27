import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/home';
import Services from './components/services'
import Projects from './components/projects'
import About from './components/about'
import Contacts from './components/contacts'
import { Preloader, Placeholder } from 'react-preloading-screen'
import logo from './assets/logo_vertical.png'
import logotxt from './assets/logo_text.png'

import { Power2 } from "gsap";



import $ from 'jquery'
import TweenMax from 'gsap'
import TimelineLite from 'gsap'

import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init();

function App() {
  var slideIndex = 1;



  function animate(t1, t3) {

    t1.play();
    t3.play();

  }
  function rev(t2, t4) {

    t2.play();
    t4.play();


  }

  useEffect(() => {
    showSlides(slideIndex);//initial display
  });


  function parallaxIt(e, target, movement) {
    var $this = $("#container");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 2, {
      x: (relX - $this.width() / 2) / $this.width() * movement,
      y: (relY - $this.height() / 2) / $this.height() * movement
    });
  }
  window.onscroll = function () { myFunction() };

  function myFunction() {
    var logo = document.getElementById("lo");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      logo.style.opacity = "0";
      console.log(logo)
    }
    else {
      logo.style.opacity = "1";

    }
  }


  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var pic = document.getElementById('lo');
    var pictxt = document.getElementById('lotxt');

    const t1 = TweenMax.to(pic, 1, { x: -240, y: 220, scale: 3.5, ease: Power2.easeOut }).reverse();
    const t2 = TweenMax.to(pic, 1, { x: 0, y: 0, scale: 1, ease: Power2.easeOut }).reverse();
    const t3 = TweenMax.to(pictxt, 1, { x: -250, y: 280, scale: 2, opacity: 1, ease: Power2.easeOut }).reverse();
    const t4 = TweenMax.to(pictxt, 1, { x: 0, y: 0, scale: 1, opacity: 0, ease: Power2.easeOut }).reverse();
    var dots = document.getElementsByClassName("demo");
    var dot = document.getElementsByClassName("dem");
    var demo = document.getElementsByClassName("para");


    if (n > 5) { slideIndex = 1 }
    if (n < 1) { slideIndex = 5 }
    if (slideIndex == 1) {
      animate(t1, t3);
    }
    else {
      rev(t2, t4);
    }
    // for (i = 0; i < slides.length; i++) {
    //   console.log(slideIndex);
    //   demo[i].className = demo[i].className += "  uk-animation-reverse";
    // }

  
    for (i = 0; i < slides.length; i++) {

      slides[i].style.display = "none";

      dots[i].className = dots[i].className.replace(" active", "");
      dot[i].className = dot[i].className.replace(" active", "");
      demo[i].className = demo[i].className.replace("  uk-animation-reverse", "");

    }


    slides[slideIndex - 1].style.display = "block";

    dots[slideIndex - 1].className += " active";
    dot[slideIndex - 1].className += " active";

  }
  return (
    <Preloader fadeDuration={1300}>
      <div className="App" style={{ position: "relative" }}>

        <div class="under" style={{ zIndex: -1, backgroundColor: "#0A1623", height: "100%", width: "100vw", position: "fixed" }}>

          <img id="lo" style={{ marginLeft: "48%", marginTop: "15px", height: "50px", width: "50px", opacity: "1" }} src={logo}></img>
          <img id="lotxt" style={{ marginLeft: "47%", marginTop: "15px", height: "20px", width: "90px", opacity: "0" }} src={logotxt} uk-image="true"></img>

        </div>

        <div class="slideshow-container">

          <div id="container" onMouseMove={(e) => parallaxIt(e, '.particle', -200)} class="mySlides ">
            <Home  ></Home>
            <a class="prev" uk-slideshow-item="previous" onClick={(e) => plusSlides(-1)}><span uk-icon="icon: triangle-left ; ratio: 2"></span></a>
            <div class="txt2 uk-visible@l"  >C O N T A C T </div>
            <a class="next" uk-slideshow-item="next" onClick={(e) => plusSlides(1)}><span uk-icon="icon: triangle-right ; ratio: 2"></span></a>
            <div class="txt uk-visible@l "  >S E R V I C E S </div>
            <div class="particle" id="particle1" ></div>
            <div class="particle" id="particle2" ></div>
            <div class="particle" id="particle4" ></div>
            <div class="particle" id="particle5" ></div>
            <div class="particle" id="particle6" ></div>
            <div class="particle" id="particle9"  ></div>
            <div class="particle" id="particle10"  ></div>
            <div class="particle" id="particle11"  ></div>

          </div>

          <div id="container" onMouseMove={(e) => parallaxIt(e, '.particle', -200)} class="mySlides ">
            <Services></Services>
            <a class="prev" uk-slideshow-item="previous" onClick={(e) => plusSlides(-1)}><span uk-icon="icon: triangle-left ; ratio: 2"></span></a>
            <div class="txt2 uk-visible@l"  >H O M E </div>
            <a class="next" uk-slideshow-item="next" onClick={(e) => plusSlides(1)}><span uk-icon="icon: triangle-right ; ratio: 2"></span></a>
            <div className="txt uk-visible@l">P R O J E C T S</div>


            <div class="particle" id="particle4" ></div>
            <div class="particle" id="particle5" ></div>
            <div class="particle" id="particle6" ></div>
            <div class="particle" id="particle7" ></div>
            <div class="particle" id="particle8"  ></div>
            <div class="particle" id="particle9"  ></div>
            <div class="particle" id="particle10"  ></div>
            <div class="particle" id="particle11"  ></div>
            <div class="particle" id="particle12"  ></div>
            <div class="particle" id="particle13"  ></div>
          </div>

          <div id="container" onMouseMove={(e) => parallaxIt(e, '.particle', -200)} class="mySlides ">
            <Projects></Projects>
            <a class="prev" uk-slideshow-item="previous" onClick={(e) => plusSlides(-1)}><span uk-icon="icon: triangle-left ; ratio: 2"></span></a>
            <div class="txt2 uk-visible@l"  >S E R V I C E S </div>
            <a class="next" uk-slideshow-item="next" onClick={(e) => plusSlides(1)}><span uk-icon="icon: triangle-right ; ratio: 2"></span></a>
            <div class="txt uk-visible@l"  >A B O U T </div>
            <div class="particle" id="particle3" ></div>
            <div class="particle" id="particle4" ></div>
            <div class="particle" id="particle5" ></div>
            <div class="particle" id="particle6" ></div>
            <div class="particle" id="particle7" ></div>
            <div class="particle" id="particle8"  ></div>
            <div class="particle" id="particle9"  ></div>
            <div class="particle" id="particle10"  ></div>
            <div class="particle" id="particle11"  ></div>
            <div class="particle" id="particle12"  ></div>
            <div class="particle" id="particle13"  ></div>
          </div>

          <div id="container" onMouseMove={(e) => parallaxIt(e, '.particle', -200)} class="mySlides ">
            <About></About>
            <a class="prev" uk-slideshow-item="previous" onClick={(e) => plusSlides(-1)}><span uk-icon="icon: triangle-left ; ratio: 2"></span></a>
            <div class="txt2 uk-visible@l"  >P R O J E C T S </div>
            <a class="next" uk-slideshow-item="next" onClick={(e) => plusSlides(1)}><span uk-icon="icon: triangle-right ; ratio: 2"></span></a>
            <div class="txt uk-visible@l">C O N T A C T </div>
            <div class="particle" id="particle3" ></div>
            <div class="particle" id="particle4" ></div>
            <div class="particle" id="particle5" ></div>
            <div class="particle" id="particle6" ></div>
            <div class="particle" id="particle7" ></div>
            <div class="particle" id="particle8"  ></div>
            <div class="particle" id="particle9"  ></div>
            <div class="particle" id="particle10"  ></div>
            <div class="particle" id="particle11"  ></div>
            <div class="particle" id="particle12"  ></div>
            <div class="particle" id="particle13"  ></div>
          </div>
          <div id="container" onMouseMove={(e) => parallaxIt(e, '.particle', -200)} class="mySlides ">
            <Contacts></Contacts>
            <a class="prev" uk-slideshow-item="previous" onClick={(e) => plusSlides(-1)}><span uk-icon="icon: triangle-left ; ratio: 2"></span></a>
            <div class="txt2 uk-visible@l"  >A B O U T </div>
            <a class="next" uk-slideshow-item="next" onClick={(e) => plusSlides(1)}><span uk-icon="icon: triangle-right ; ratio: 2"></span></a>
            <div class="txt uk-visible@l">H O M E </div>
            <div class="particle" id="particle4" ></div>
            <div class="particle" id="particle5" ></div>
            <div class="particle" id="particle6" ></div>
            <div class="particle" id="particle7" ></div>
            <div class="particle" id="particle8"  ></div>
            <div class="particle" id="particle9"  ></div>
            <div class="particle" id="particle10"  ></div>
            <div class="particle" id="particle11"  ></div>
            <div class="particle" id="particle12"  ></div>
            <div class="particle" id="particle13"  ></div>
          </div>
        </div>


        <div class="topnav " >
          <nav class=" uk-navbar-container" uk-navbar="true">
            <div class="uk-navbar-center">

              <ul class="uk-navbar-nav">
                <li><a><a class="demo active" href="#home" onClick={(e) => currentSlide(1)}>HOME
        <div class="dem act" style={{ marginLeft: "15px" }}></div></a></a></li>

                <li><a><a class="demo" href="#services" onClick={(e) => currentSlide(2)}>SERVICE
        <div class="dem " style={{ marginLeft: "21px" }}></div></a></a></li>

                <li><a><a class="demo" href="#projects" onClick={(e) => currentSlide(3)}>PROJECT
        <div class="dem " style={{ marginLeft: "24px" }}></div></a></a></li>

                <li><a><a class="demo" href="#about" onClick={(e) => currentSlide(4)}>ABOUT
        <div class="dem " style={{ marginLeft: "17px" }}></div></a></a></li>

                <li><a><a class="demo" href="#contacts" onClick={(e) => currentSlide(5)}>CONTACTS
        <div class="dem " style={{ marginLeft: "26px" }}></div></a></a></li>
              </ul>

            </div>
          </nav>
        </div>
      </div>
      <Placeholder>
        <div class="uk-text-center" style={{ backgroundColor: "#0A1623", height: "100vh", width: "100vw" }}>
          <img width="280px" height="280px" style={{ marginTop: "15%", border: "1px solid #E99639", borderRadius: "50%", padding: "40px" }} src={logo} uk-img="true"></img>

        </div>
      </Placeholder>
    </Preloader >
  );
}

export default App;
