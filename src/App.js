import './App.css';
import Form from './components/Form';
import TaskList from './components/TaskList';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TaskPage from './components/TaskPage';



const AppDiv = styled.div`
  background-color: #313642;
  height: 95vh;
  margin: 30px;
  border-radius: 30px;
  box-shadow: 0px 0px 30px 4px rgba(0,0,0,0.8);
  font-family: 'Rubik', sans-serif;
`;


function App() {
  return (
    <Router >
      <AppDiv className='background-image'>
        <Form />

      </AppDiv>
    </Router >
  );
}

export default App;
