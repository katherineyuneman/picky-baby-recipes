import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { UserProvider } from './context/user';

function App() {
  return (
    <div className="App">
      <UserProvider>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
        </Routes>
      </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;