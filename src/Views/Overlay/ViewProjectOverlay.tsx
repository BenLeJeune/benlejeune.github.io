import React, {useContext} from 'react';
import './ViewProjectOverlay.css';
import './ProjectOverlayCarousel.css';
import ViewProjectContext from "../../Context/ViewProjectContext";
import {CSSTransition} from "react-transition-group";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ViewProjectOverlay() {

    const { shown, project } = useContext( ViewProjectContext );

    return <CSSTransition unmountOnExit in={shown}
                          timeout={500}
                          classNames="viewProjectOverlay"
    >

        <div id="ViewProjectOverlayContainer">
            <div id="ViewProjectOverlayTopBar">
                <div id="TopBarProjectTitle">
                    <h2>
                        <span>
                            {project.title}
                        </span>
                    </h2>
                </div>
                <HideProjectButton/>
            </div>
            <Carousel>
                {
                    Object.keys( project.items ).map(
                        itemKey => <div className="slideContainer">
                            <img className="slideImage" src={ `${project.items[itemKey].imageURL}` }/>
                        </div>
                    )
                }
            </Carousel>
        </div>

    </CSSTransition>;

}

export function HideProjectButton() {
    const { setShownProject, project } = useContext( ViewProjectContext);

    return <div id="TopBarHideButtonOuter">
        <div id="HideButtonInnerContainer" onMouseDown={ () => setShownProject(false) }>
            <div id="HideButtonMain" className={ project.color }>
                <img id="HideButtonMainImage" alt="" src="./assets/xclose.svg"/>
            </div>
            <div id="HideButtonHover" className={ project.color }>
                <img src="./assets/xclose-white.svg" alt="" id="HideButtonHoverImage"/>
            </div>
        </div>
    </div>

}