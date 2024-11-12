import React from "react"
import { useParams } from "react-router-dom"
import workspaces from "../data/workspacesData"

const WorkspaceScreen = () => {
    const {workspace_id} = useParams()
    const workspace_found = workspaces.find((workspace) => {
        return workspace.id == workspace_id
    })
    console.log(workspace_found)
    return (
        <div>
            <h1>{workspace_found.title}</h1>
            <div>
                <MessagesList messages={workspace_found.messages}></MessagesList>
            </div>
        </div>
    )
}


const MessagesList = ({messages}) =>{
    return(
        messages.map(message => {
            return <Message 
            key={message.id} 
            texto={message.texto} 
            autor={message.autor} 
            id={message.id}
            hora={message.hora}
            />
        })
    )
}

const Message = ({texto, autor, id, hora})=>{
    return(
        <div>
            <h3>{autor}</h3>
            <p>{texto}</p>
            <span>hora: {hora}</span>
        </div>
    )
}


export default WorkspaceScreen