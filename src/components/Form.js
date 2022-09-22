import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import styled from 'styled-components';




const FirstTitle = styled.h1`
text-align: center;
font-size: 65px;
margin: 0px;
padding: 70px;
font-family: 'Rubik', sans-serif;
color: #1D90F4;
`;

const DivInput = styled.div`


`;

const InputText = styled.input`
font-size: 25px;
display: inline-block;
padding: 5px;
border-radius: 25px 0 0 25px;
background: transparent;
border: 2px solid black;
outline: none;
padding: 10px;
color: #1D90F4;
&:hover{
    box-shadow: 0px 0px 15px -1px rgba(29, 144, 244, 0.5);
    transition: box-shadow 0.7s ease-in-out;
}
`;

const BtnSubmit = styled.div`
font-size: 25px;
display: inline-block;
position: relative;
box-sizing: border-box;
-webkit-transition: .5s;
transition: .5s;
padding: 10px;
border-radius: 0 25px 25px 0;
border: 2px solid black;
border-left: none;
&:hover {
    box-shadow: 0px 0px 15px -1px rgba(29, 144, 244, 0.5);
    transition: box-shadow 0.7s ease-in-out;
    color:#1D90F4;
    transition: color 0.3s;
}
`;

const FormWrapper = styled.div`
display:flex;
flex-direction: column;
align-items: center;

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

        <FormWrapper className='form-wrapper'>
            <FirstTitle> Yarden's Todo-List </FirstTitle>
            <DivInput className='Add-new-item'>
                <InputText onChange={inputHandler} className="input-item" type="text" placeholder="Please enter Task"></InputText>
                <BtnSubmit onClick={submitHandler} className="btn-submitTask">Submit</BtnSubmit>
            </DivInput>
            <TaskList myInput={myinput} IsClicked={Clicked} setClicked={setClicked} />
        </FormWrapper>
    )
}

export default Form