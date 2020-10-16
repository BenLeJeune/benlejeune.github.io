import React from 'react';
import './PortfolioComponent.css';
import {Project} from "../../portfolio";

export type PortfolioContainerProps = {
    proj: Project
}
export default function PortfolioComponent({ proj }:PortfolioContainerProps) {



    return <div className="portfolioComponentMainContainer">
        <div className={`portfolioComponentBackground ${ proj.color }`}/>
        <div className="portfolioComponentImageContainer">
            <div className="portfolioComponentImageInner" style={{
                backgroundImage: `url(${ proj.coverURL })`
            }} />
        </div>
    </div>

}