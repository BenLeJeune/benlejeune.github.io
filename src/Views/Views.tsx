import React, {useEffect, useRef} from 'react';
import Landing from "./Landing/Landing";
import About from "./About/About";

export default function Views() {

    const ViewsContainerRef = useRef<HTMLDivElement>(null);

    //THIS IS FOR HANDLING SCROLLING
    useEffect(() => {
        window.addEventListener("scroll", smoothScrolling);
        return () => window.removeEventListener("scroll", smoothScrolling);
    })

    const smoothScrolling = () => {
        if ( ViewsContainerRef.current ) {
            const scroll = window.scrollY;
            ViewsContainerRef.current.style.transform = `translateY(-${ scroll }px)`
        }
    }


    return <div id="ViewsWrapper">
        <div ref={ViewsContainerRef} id="ViewsContainer">
            <Landing/>
            <About/>
        </div>
    </div>


}