import React from 'react'
import Time from './timeline'
import logo from '../assets/logo_vertical.png'


export default function About() {
    return (<div>
        <div class="uk-hidden@m uk-padding uk-text-center" style={{ width: "100vw", backgroundColor: "#0A1623" }}>
            <img id="lo" style={{ marginTop: "15px", height: "50px", width: "50px", opacity: "1" }} src={logo}></img>

            <h3 class="uk-animation-fade" style={{ marginTop: "5px", color: 'white', fontWeight: "lighter" }}>ABOUT</h3>
            <div class="uk-visible@l" style={{ marginLeft: "48.3%", width: "45px", height: "2px", backgroundColor: "#2F3C4D" }} ></div>
            <div class="  uk-animation-slide-right" >Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</div>

            <Time></Time>



        </div>
        <div class="uk-visible@m uk-padding uk-text-center" style={{ width: "100vw", backgroundColor: "transparent" }}>
            <h3 class="uk-animation-fade" style={{ marginTop: "40px", color: 'white', fontWeight: "lighter" }}>ABOUT</h3>
            <div class="uk-visible@l" style={{ marginLeft: "48.3%", width: "45px", height: "2px", backgroundColor: "#2F3C4D" }} ></div>
            <div class="para  uk-animation-slide-right" >Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</div>

            <Time></Time>



        </div>
    </div>
    )
}