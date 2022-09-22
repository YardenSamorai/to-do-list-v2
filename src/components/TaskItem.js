import React, { useState, useEffect } from 'react'
import DeleteIcon from '../assests/DeleteIcon.png';
import DoneIcon from '../assests/DoneIcon.png'
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Item = styled.div`

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
display: flex;
border: 2px solid black;
margin: 0 815px 0 0;
width: 725px;
justify-content: space-between;
margin: 10px; 

&:hover {
  box-shadow: 0px 0px 15px -1px rgba(29, 144, 244, 0.5);
  transition: box-shadow 0.2s ease-in-out;
}
`;

const OnHoverImg = styled.img`
&:hover {
  box-shadow: 0px 0px 15px -1px rgba(29, 144, 244, 0.5);
  transition: box-shadow 0.2s ease-in-out;
}
`;


const TextFalse = styled.div`
width: 50%;
float: left;
text-align: center;
font-size: 35px;
color: #1D90F4;
text-decoration: line-through;
`;

const IconWrapper = styled.div`
justify-content: end;
right: 10%
display:flex;
`;

const DivDate = styled.div`
font-size: 19px;
position: flex;
right: 100px;
top: 15px;
height: 30px
`;


const TaskItem = ({ task, setListTask, list }) => {
  const [color, setColor] = useState(task.isFinish);
  const [nextPage, setNextPage] = useState(false);

  const onClickDelete = () => {
    setListTask(list.filter(item => item.id !== task.id));
  }

  const onClickFinish = () => {
    setColor(!color);
    task.isFinish = !task.isFinish;
  }

  // const NextPage = () => {
  //   setNextPage(true);
  // }

  const relevantPath = `taskpage/${task.id}`;

  return (

    <DivWrapper className='divWrapper'>

      {color ? <TextFalse >{task.text}</TextFalse> : <Text>{task.text}</Text>}
      <DivDate>{task.date}</DivDate>
      <IconWrapper>
        <img src={DeleteIcon} onClick={onClickDelete} />
        <img src={DoneIcon} onClick={onClickFinish} />

      </IconWrapper>
    </DivWrapper>

  )
}

export default TaskItem;