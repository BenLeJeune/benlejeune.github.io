import React, {useEffect, useRef} from 'react';
import Landing from "./Landing/Landing";
import About from "./About/About";
import PortfolioContainer from "./Portfolio/PortfolioContainer";
import useScroll from "../Hooks/useScroll";
import Contact from "./Contact/Contact";

export default function Views() {

    const ViewsContainerRef = useRef<HTMLDivElement>(null);

    useScroll(() => {
        if (ViewsContainerRef.current) {
            const scroll = window.scrollY;
            ViewsContainerRef.current.style.transform = `translateY(-${scroll}px)`
        }
    })

    return <div id="ViewsWrapper">
        <div ref={ViewsContainerRef} id="ViewsContainer">
            <Landing/>
            <About/>
            <PortfolioContainer/>
            <Contact/>
        </div>
    </div>


}