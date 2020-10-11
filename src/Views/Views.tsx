import React from 'react';
import Landing from "./Landing/Landing";
import About from "./About/About";

export default function Views() {

    return <div id="ViewsWrapper">
        <div id="ViewsContainer">
            <Landing/>
            <About/>
        </div>
    </div>


}