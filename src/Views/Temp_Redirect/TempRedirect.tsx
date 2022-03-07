import React from 'react';
import "./TempRedirect.css";
import {Link} from "react-router-dom";

export default function TempRedirect() {

    return <div>
        <h1>Hello!</h1>
        <p>As you can probably tell, this site is undergoing maintenance.</p>
        <p>There used to be a really cool site about web and graphic design here, but since making that site I've changed my focus.</p>
        <p>If you still want to check out that site, you can so do below! It should look a lot prettier than this one.</p>
        <Link to="/old-site">Click here!</Link>
    </div>

}