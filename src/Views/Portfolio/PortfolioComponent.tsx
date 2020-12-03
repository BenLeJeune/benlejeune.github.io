import React, {useRef} from 'react';
import './PortfolioComponent.css';
import {Project} from "../../portfolio";
import useScroll from "../../Hooks/useScroll";

export type PortfolioContainerProps = {
    proj: Project
}
export default function PortfolioComponent({ proj }:PortfolioContainerProps) {

    const pfImageInner = useRef<HTMLDivElement>(null), pfImageContainer = useRef<HTMLDivElement>(null);

    useScroll( scrollY => {
        if ( pfImageInner.current && pfImageContainer.current ) {
            const { height } = pfImageContainer.current.getBoundingClientRect()
            //Using this because getBoundingClientRect() takes a moment to update - this is smoother
            const top = scrollY - pfImageContainer.current.offsetTop
            const MULTIPLIER = proj.multiplier
            const offset = ( top / ( window.innerHeight + height ) ) * 100
            pfImageInner.current.style.transform = `translateY(${ MULTIPLIER * ( 0.5 * offset  -12.5) }%)`
        }
    } )

    return <div ref={ pfImageContainer } className="portfolioComponentMainContainer">
        <div className={`portfolioComponentBackground ${ proj.color } ${ proj.facing }`} style={{
            transform: `translate3D(${proj.facing === "left" ? "-1" : "1"}em, 1em, 0)`
        }}/>
        <div className="portfolioComponentImageContainer">
            <div ref={ pfImageInner } className="portfolioComponentImageInner" style={{
                backgroundImage: `url(${ proj.coverURL })`
            }} />
        </div>
        <div className={`portfolioComponentTextContainer ${ proj.color }`}>
            <div className={`portfolioComponentTextRow ${ proj.facing } height-${ proj.height }`} style={{
                gridRow: `${proj.height}/${proj.height+1}`
            }}>
                <div className={`portfolioComponentText ${ proj.facing }`}>
                    <h2>{ proj.title }</h2>
                    <p>{ proj.subtitle }</p>
                </div>
            </div>
        </div>
    </div>

}