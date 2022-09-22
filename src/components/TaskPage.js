import React from 'react'
import { useParams } from "react-router-dom"

const TaskPage = ({task}) => {
    const { id } = useParams();

    return (
        <div>
            <h1> Hello World</h1>
        </div>
    )
}

export default TaskPage