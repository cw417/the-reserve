import { Route, Routes } from 'react-router-dom';
import Homepage from './views/Homepage';
import CreateAccount from './views/CreateAccount';
import Navbar from './components/Navbar';
import './App.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/create' element={<CreateAccount />} />
      </Routes>
    </div>
  );
}

