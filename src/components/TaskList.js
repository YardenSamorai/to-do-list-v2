import React, { useState, useEffect } from 'react'
import TaskItem from './TaskItem';
import styled from 'styled-components';

const List = styled.div`
    position: relative;
    top: 200px;
    
`;

const TaskList = ({ myInput, IsClicked, setClicked }) => {
    const [listTask, setListTask] = useState([]);
    const [counter, SetCounter] = useState(0);

    useEffect(() => {
        if (IsClicked === true) {
            setListTask((prev) => [
                ...prev, { text: myInput, isDeleted: false, id: counter, isFinish: false, date: new Date().toLocaleDateString() }
            ]
            )
            setClicked(false);
            SetCounter(counter + 1);
        }
    }, [IsClicked, listTask]);

    return (
        <div>
            <List>
                {listTask && listTask.map(task => {
                    if (task.isDeleted === false) {
                        return (
                            <TaskItem task={task} setListTask={setListTask} list={listTask} key={task.id} />
                        )
                    }
                })}
            </List>
        </div>
    )
}

export default TaskList