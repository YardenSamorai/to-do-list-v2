import './App.css';
import Form from './components/Form';
import TaskList from './components/TaskList';
import styled from 'styled-components';


const AppDiv = styled.div`
  min-height: 1800px;
`;


function App() {
  return (
    <AppDiv >
      <Form />
      <TaskList />
    </AppDiv>
  );
}

export default App;
