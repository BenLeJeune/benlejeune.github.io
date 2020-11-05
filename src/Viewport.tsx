import React, {useEffect, useRef} from 'react';
import './sass/viewport.css';
import Sidebar from "./Views/Sidebar/Sidebar";
import Views from "./Views/Views";
import useWindowSize from "./Hooks/useWindowSize";
import useScroll from "./Hooks/useScroll";
import ViewProjectOverlay from "./Views/Overlay/ViewProjectOverlay";

export default function Viewport() {

  const { height, width } = useWindowSize();
  const ViewportMarginsRef = useRef<HTMLDivElement>(null);

  //This sets the height of the body whenever the window is resized
  useEffect(() => {
    const viewsContainer = document.getElementById("ViewsContainer");
    if ( viewsContainer ) {
      const viewsContainerHeight = viewsContainer.getBoundingClientRect().height;
      document.body.style.height = `${viewsContainerHeight}px`;
    }
  }, [ height, width ])

  useScroll( scrollY => {
    if ( ViewportMarginsRef.current ) {
      ViewportMarginsRef.current.style.border = `${scrollY > 150 ? "0" : "50"}px solid white`
    }
  } )

  return <div id="OuterWrapper">
    <div id="InnerWrapper">
      <div ref={ ViewportMarginsRef } id="ViewportMargins" style={{border: "50px solid white"}}/>
      <Sidebar/>
      <Views/>
    </div>
    <ViewProjectOverlay/>

  </div>

}
