import React, { useState, useEffect } from 'react'
import TaskItem from './TaskItem';
import styled from 'styled-components';

const List = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 60px;
border: 2px solid black;
border-radius: 20px;
box-shadow: 0px 0px 27px 3px rgba(0,0,0,0.8);
`;

const TaskList = ({ myInput, IsClicked, setClicked }) => {
    const [listTask, setListTask] = useState([]);
    const [counter, SetCounter] = useState(0);

    useEffect(() => {
        if (IsClicked) {
            if (myInput !== "") {
                setListTask((prev) => [
                    ...prev, { text: myInput, isDeleted: false, id: counter, isFinish: false, date: new Date().toLocaleDateString() }
                ]
                )
            }
            setClicked(false);
            SetCounter(counter + 1);
        }
    }, [IsClicked, listTask]);


    if (listTask.length) {
        return (
            <List className='List-wrapper'>
                {listTask && listTask.map(task => {
                    if (task.isDeleted === false) {
                        return (
                            <TaskItem task={task} setListTask={setListTask} list={listTask} key={task.id} />
                        )
                    }
                })}
            </List>
        )
    }

}

export default TaskList