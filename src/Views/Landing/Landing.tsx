import React, {useEffect} from 'react';
import './landing.css';
import './landingAnimation.css';
import TitleGreeting from "./TitleGreeting";
import TitleName from "./TitleName";

export default function Landing() {

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    })

    const onScroll = (e:Event) => {
        const scroll = window.scrollY
        const redRect = document.getElementById("LandingView");

        if ( redRect ) {
            console.log(scroll);
            if ( scroll > 0 && redRect.className === 'anim-dormant') {
                redRect.className = 'anim-transition';
                setTimeout( () => { if ( redRect.className !== 'anim-dormant' ) redRect.className = 'anim-final' }, 500 )
            }
            if (scroll === 0) {
                redRect.className = 'anim-dormant';
            }
        }
    }

    return <div id="LandingView" className="anim-dormant">
        <div id="LandingTitleContainer">
            <div id="LandingBoldTitle">
                <TitleGreeting/>
                <TitleName/>
            </div>
        </div>
        <div id="LandingTransitionRect">

        </div>
    </div>

}