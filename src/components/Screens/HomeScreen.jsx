import React from "react";
import WorkspaceList from "../WorkspaceList/WorkspaceList";
import { Link } from "react-router-dom";
import workspaces from "../data/workspacesData";
const HomeScreen = () => {

    return (
        <div>
            {/* Link hace lo mismo que el ancla <a href=""></a>. Usando link solo cambia la url, sin actualizar la pagina*/}
            <Link to={'/estados'}>Ir a estados </Link>
            <Link to={'formularios'}>Ir a formularios</Link>
            <br />
            <WorkspaceList workspaces={workspaces}/>
        </div>
    )
}

export default  HomeScreen