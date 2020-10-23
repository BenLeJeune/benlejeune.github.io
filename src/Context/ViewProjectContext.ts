import {Project, MyPortfolio} from "../portfolio";
import React from "react";

export type ViewProjectContextType = {
    shown: boolean,
    project: Project,
    setShownProject: ( shown:boolean, project?:Project ) => void
}

const ViewProjectContext = React.createContext<ViewProjectContextType>({
    shown: true,
    project: Object.values( MyPortfolio )[0],
    setShownProject: () => { }
})

export default ViewProjectContext