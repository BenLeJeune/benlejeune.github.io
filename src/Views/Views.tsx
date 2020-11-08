import React, {useEffect, useRef} from 'react';
import Landing from "./Landing/Landing";
import About from "./About/About";
import PortfolioContainer from "./Portfolio/PortfolioContainer";
import useScroll from "../Hooks/useScroll";

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
        </div>
    </div>


}