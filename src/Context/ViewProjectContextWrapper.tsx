import React, {ReactChild, useState} from 'react';
import ViewProjectContext from './ViewProjectContext';
import {MyPortfolio, Project} from "../portfolio";

type Props = {
    children: ReactChild
}

export default function ViewProjectContextWrapper({ children }:Props) {

    const [ shown, setShown ] = useState<boolean>(false);

    const [ project, setProject ] = useState<Project>( MyPortfolio[ Object.keys(MyPortfolio)[0] ] )

    const setShownProject = ( shown:boolean, project?:Project ) => {
        setShown( shown );
        if ( project ) {
            setProject( project );
        }
    }

    return <ViewProjectContext.Provider value={{ shown, project, setShownProject }}>
        {
            children
        }
    </ViewProjectContext.Provider>

}