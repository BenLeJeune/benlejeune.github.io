import React, {useContext, useEffect, useState} from 'react';
import './ViewProjectOverlay.css';
import './ProjectOverlayCarousel.css';
import ViewProjectContext from "../../Context/ViewProjectContext";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ViewProjectOverlay() {

    const { shown, project } = useContext( ViewProjectContext );

    const [ index, setIndex ] = useState(0);

    useEffect( () => {
        setIndex(0);
    }, [ shown, project ] )

    return <CSSTransition unmountOnExit in={shown}
                          timeout={500}
                          classNames="viewProjectOverlay"
    >

        <div id="ViewProjectOverlayContainer">
            <div id="ViewProjectOverlayTopBar">
                <div id="TopBarProjectTitle">
                    <h2>
                        {project.title}
                    </h2>
                </div>
                <HideProjectButton/>
            </div>
            <Carousel
                transitionTime={ 500 }
                showThumbs={ false }
                showStatus={ false }
                showIndicators={ false }
                onChange={ index => setIndex( index ) }
                renderArrowNext={
                    ( clickHandler, hasNext) => <div className="buttonColumn right">
                        <div className="arrowContainer" onMouseDown={ clickHandler }>
                            <img src={`/assets/carousel-arrow-${ project.color }.svg`} alt="" className={`${hasNext?'hasNext':''} arrow`}/>
                            <img src={`/assets/carousel-arrow-${ project.color }.svg`} alt="" className={`${hasNext?'hasNext':''} arrow absolute`}/>
                        </div>
                    </div>
                }
                renderArrowPrev={
                    ( clickHandler, hasPrev) => <div className="buttonColumn left">
                        <div className="arrowContainer" onMouseDown={ clickHandler }>
                            <img src={`/assets/carousel-arrow-${ project.color }.svg`} alt="" className={`${hasPrev?'hasPrev':''} arrow`}/>
                            <img src={`/assets/carousel-arrow-${ project.color }.svg`} alt="" className={`${hasPrev?'hasPrev':''} arrow absolute`}/>
                        </div>
                    </div>
                }
            >
                {
                    Object.keys( project.items ).map(
                        itemKey => <div className="slideContainer">
                            <img className="slideImage" src={ `${project.items[itemKey].imageURL}` }/>
                        </div>
                    )
                }
            </Carousel>
            <SwitchTransition>

                <CSSTransition
                    timeout={500}
                    classNames="captionTransition"
                    key={ index }
                    unmountOnExit
                >
                    <div className="caption">
                        { project.items[index].caption }
                    </div>
                </CSSTransition>

            </SwitchTransition>
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