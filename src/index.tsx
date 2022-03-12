import React from 'react';
import ReactDOM from 'react-dom';
import Viewport from './Viewport';
import * as serviceWorker from './serviceWorker';
import './sass/index.css'
import ViewProjectContextWrapper from "./Context/ViewProjectContextWrapper";
import TempRouter from "./Temp_Router";
import TempRedirect from "./Views/Temp_Redirect/TempRedirect";

ReactDOM.render(
  <React.StrictMode>
      {/*    <Viewport />*/}
      <ViewProjectContextWrapper>
      <TempRedirect/>
      </ViewProjectContextWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
