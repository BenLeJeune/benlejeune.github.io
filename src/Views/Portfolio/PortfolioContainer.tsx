import React from 'react';
import './PortfolioContainer.css';
import useInView from "../../Hooks/useInView";
import {MyPortfolio, Project} from "../../portfolio";
import PortfolioComponent from "./PortfolioComponent";

export default function PortfolioContainer() {

    const { visibleClass:titleVisibleClass } = useInView( "PortfolioSectionTitleText", true)



    return <div id="PortfolioContainer">
        <div id="PortfolioSectionTitle" className={ titleVisibleClass }>
            <p id="PortfolioSectionTitleText">Some of my work</p>
        </div>
        <div id="PortfolioGridContainer">
            <PortfolioRow leftproj={ MyPortfolio["fivepines"] } rightproj={ MyPortfolio["personal"] } />
        </div>
    </div>

}

export type PortfolioRowProps = {
    leftproj:Project,
    rightproj:Project
}

export function PortfolioRow({ leftproj, rightproj }:PortfolioRowProps) {
    return <div className="portfolioGridRows">
        <div className="leftProjContainer columns">
            <div className="leftProj">
                <PortfolioComponent proj={ leftproj }/>
            </div>
        </div>
        <div className="rightProjContainer columns">
            <div className="rightProj">
                <PortfolioComponent proj={ rightproj }/>
            </div>
        </div>
    </div>
}