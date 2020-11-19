import React from 'react';
import './Contact.css';
import SocialMediaLinks from "./SocialMediaLinks";
import useInView from "../../Hooks/useInView";

export default function Contact() {

    return <div id="ContactContainer">
        <p id="FindMe">You can find me at</p>
        <div id="SocialContainer">
            <h2 id="SocialTag" >@ben_le_jeune_</h2>
            <SocialMediaLinks/>
        </div>
        <p id="Email">Or contact <a href="mailto:me@benlejeune.com" id="EmailHighlight">me@benlejeune.com</a></p>
        <div style={{height: "33vh"}}/>
    </div>

}