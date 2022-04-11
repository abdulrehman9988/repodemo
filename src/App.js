import logo from './logo.svg';
import './App.css';

import Course from "./Component/Course"
import Login from './Component/Login';
import AddData from './AddData';
import Bootstrapflex from './Component/Bootstrapflex';
import Navbar from './TailwindCss/Navbar';
import Form from './TailwindCss/Form';




function App() {
  return (
    <div className="App">
     <Navbar/>
     <Form/>
    </div>
  );
}

export default App;
