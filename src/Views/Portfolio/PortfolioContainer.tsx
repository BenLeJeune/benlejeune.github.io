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
            <PortfolioComponent proj={ MyPortfolio["fivePines"] }/>
        </div>
    </div>

}