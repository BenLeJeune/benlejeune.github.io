import React, {useEffect} from 'react';
import './sass/viewport.css';
import Sidebar from "./Views/Sidebar/Sidebar";
import Views from "./Views/Views";
import useWindowSize from "./Hooks/useWindowSize";

export default function Viewport() {

  const { height, width } = useWindowSize()

  //This sets the height of the body whenever the window is resized
  useEffect(() => {
    const viewsContainer = document.getElementById("ViewsContainer");
    if ( viewsContainer ) {
      const viewsContainerHeight = viewsContainer.getBoundingClientRect().height;
      document.body.style.height = `${viewsContainerHeight}px`;
    }
  }, [ height, width ])

  return <div id="OuterWrapper">
    <div id="InnerWrapper">
      <div id="ViewportMargins"/>
      <Sidebar/>
      <Views/>
    </div>

  </div>

}
