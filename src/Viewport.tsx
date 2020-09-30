import React from 'react';
import './sass/viewport.css';
import Sidebar from "./Views/Sidebar/Sidebar";
import Views from "./Views/Views";

export default function Viewport() {

  return <div id="OuterWrapper">
    <div id="InnerWrapper">
      <Sidebar/>
      <Views/>
    </div>

  </div>

}
