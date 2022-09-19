import React, { useState, useEffect } from 'react'
import DeleteIcon from '../assests/DeleteIcon.png';
import DoneIcon from '../assests/DoneIcon.png'
import styled from 'styled-components';

const Item = styled.div`
width: 50%;
float:right;
`;

const Text = styled.div`
width: 50%;
float: left;
text-align: center;
font-size: 35px;
`;


const Wrapper = styled.div`
border: 2px solid black;
width: 100rem;
`;


const DivWrapper = styled.div`
position: relative;
display: flex;
border: 2px solid black;
margin: 0 815px 0 0;
width: 725px;
justify-content: space-between;
left: 30%;
margin: 10px; 
`;


const TextFalse = styled.div`
width: 50%;
float: left;
text-align: center;
font-size: 35px;
color: red;
`;

const IconWrapper = styled.div`
justify-content: end;
right: 10%
display:flex;
`;

const DivDate = styled.div`
font-size: 19px;
position: relative;
right: 100px;
top: 15px;
`;


const TaskItem = ({ task, setListTask, list }) => {
  const [color, setColor] = useState(task.isFinish);

  const onClickDelete = () => {
    setListTask(list.filter(item => item.id !== task.id));
  }

  const onClickFinish = () => {
    setColor(!color);
    task.isFinish = !task.isFinish;
  }

  return (
    <DivWrapper>

      {color ? <TextFalse>{task.text}</TextFalse> : <Text>{task.text}</Text>}
      <DivDate>{task.date}</DivDate>
      <IconWrapper>
        <img src={DeleteIcon} onClick={onClickDelete} />
        <img src={DoneIcon} onClick={onClickFinish} />

      </IconWrapper>
    </DivWrapper>
  )
}

export default TaskItem;