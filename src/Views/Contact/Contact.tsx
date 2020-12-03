import React from 'react';
import './Contact.css';
import SocialMediaLinks, {SocialButton} from "./SocialMediaLinks";
import useInView from "../../Hooks/useInView";

export default function Contact() {

    const MediumSocial = {
        name: "Medium",
            logoURL: "Medium-Symbol-Black-RGB.svg",
            link: "https://benlejeune.medium.com",
            description: "Sometimes I write about what I do and the things I learn on Medium."
    }

    return <div id="ContactContainer">
        <p id="FindMe">You can find me at</p>
        <div id="SocialContainer">
            <h2 className="socialTag" >@ben_le_jeune_</h2>
            <SocialMediaLinks/>
            <h2 className="socialTag" >benlejeune</h2>
            <div id="MediumContainer">
                <SocialButton socialMedia={ MediumSocial }/>
            </div>
        </div>
        <p id="Email">Or contact <a href="mailto:me@benlejeune.com" id="EmailHighlight">me@benlejeune.com</a></p>
        <div style={{height: "33vh"}}/>
    </div>

}