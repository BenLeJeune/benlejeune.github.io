import React, {useContext} from 'react';
import './PortfolioContainer.css';
import useInView from "../../Hooks/useInView";
import {MyPortfolio, Project} from "../../portfolio";
import PortfolioComponent from "./PortfolioComponent";
import ViewProjectContext from "../../Context/ViewProjectContext";

export default function PortfolioContainer() {

    const { visibleClass:titleVisibleClass } = useInView( "PortfolioSectionTitleText", true)

    const getPortfolioRows = () => Object.values( MyPortfolio ).map(
        ( proj, index ) => {
            //If it is an odd number, i.e the second of a pair
            if ( index % 2 === 1 ) return <PortfolioRow leftproj={ Object.values(MyPortfolio)[index - 1] } rightproj={ proj } />
            //If it is an even number AND is the final one
            else if ( index === Object.values(MyPortfolio).length - 1 ) return <PortfolioRow leftproj={ proj } />
            else return null
        }
    ).filter( projExists => projExists ); //Removes all 'null' elements

    return <div id="PortfolioContainer">
        <div id="PortfolioSectionTitle" className={ titleVisibleClass }>
            <p id="PortfolioSectionTitleText">Some of my work</p>
        </div>
        <div id="PortfolioGridContainer">
            {
                getPortfolioRows()
            }
        </div>
    </div>

}

export type PortfolioRowProps = {
    leftproj:Project,
    rightproj?:Project
}

export function PortfolioRow({ leftproj, rightproj }:PortfolioRowProps) {

    const { setShownProject } = useContext( ViewProjectContext )

    const { visibleClass:leftVisibleClass } = useInView( `Left-Proj-${ leftproj.title }` );

    const { visibleClass:rightVisibleClass } = useInView(rightproj ? `Right-Proj-${ rightproj.title }` : `Left-Proj-${ leftproj.title }`);

    const setProject = ( project:Project ) => setShownProject( true, project )

    return <div className="portfolioGridRows">
        <div id={`Left-Proj-${ leftproj.title }`} onMouseDown={() => setProject( leftproj ) } className={`leftProjContainer columns ${leftVisibleClass}`}>
            <div className="leftProj">
                <PortfolioComponent proj={ leftproj }/>
                <div className="mobileTitle">
                    <h2 className={leftproj.color}>{ leftproj.title }</h2>
                </div>
            </div>
        </div>
        {
            rightproj ?
            <div id={`Right-Proj-${ rightproj.title }`} onMouseDown={ () => setProject( rightproj ) } className={`rightProjContainer columns ${rightVisibleClass}`}>
                <div className="rightProj">
                    <PortfolioComponent proj={ rightproj }/>
                    <div className="mobileTitle">
                        <h2 className={rightproj.color}>{ rightproj.title }</h2>
                    </div>
                </div>
            </div> : null
        }

    </div>
}