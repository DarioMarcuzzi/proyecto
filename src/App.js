import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./componentes/home/Home.jsx"

function App() {
  return (
    <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </div>
    </BrowserRouter>
    
  );
}

export default App;
