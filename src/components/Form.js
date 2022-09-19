import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import styled from 'styled-components';


const FirstTitle = styled.h1`
text-align: center;
font-size: 65px;
`;


const DivInput = styled.div`
    position: relative;
    text-align: center;
    top: 60px;`;


const InputText = styled.input`
font-size: 30px;
display: inline-block;
position: relative;
box-sizing: border-box;
padding: 5px;
border-radius: 25px 0 0 25px;
`;

const BtnSubmit = styled.div`
    font-size: 30px;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    transition: .5s;
    padding: 5px;
    border-radius: 0 25px 25px 0;
    border: 2px solid black;
    `;

const Form = () => {
    const [myinput, setInput] = useState("");
    const [Clicked, setClicked] = useState(false);


    const inputHandler = (e) => {
        setInput(e.target.value);
        e.preventDefault();

    }

    const submitHandler = () => {
        setClicked(true);
    }

    return (
        <div>
            <FirstTitle> Yarden's Todo-List </FirstTitle>
            <DivInput className='Add-new-item'>
                <InputText onChange={inputHandler} className="input-item" type="text" placeholder="Please enter Task"></InputText>
                <BtnSubmit onClick={submitHandler} className="btn-submitTask">Submit Task</BtnSubmit>
            </DivInput>

            <TaskList myInput={myinput} IsClicked={Clicked} setClicked={setClicked} />
        </div>
    )
}

export default Form