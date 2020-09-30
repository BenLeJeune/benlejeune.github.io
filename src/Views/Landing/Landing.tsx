import React from 'react';
import './landing.css';
import TitleGreeting from "./TitleGreeting";
import TitleName from "./TitleName";

export default function Landing() {

    return <div id="LandingView">
        <div id="LandingBoldTitle">
            <TitleGreeting/>
            <TitleName/>
        </div>
    </div>

}