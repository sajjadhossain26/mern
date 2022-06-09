import { Route, Routes } from 'react-router-dom';
import './App.css';
import Student from './component/Student/Student';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Student/>}/>
    </Routes>
    </>
  );
}

export default App;
