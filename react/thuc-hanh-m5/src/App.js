import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ListFashion from './components/Fashion/list';
import Create from './components/Fashion/create';
import Edit from './components/Fashion/Edit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<ListFashion/>} />
      <Route path="/create" element={<Create/>} />
      <Route path="/edit/:id" element={<Edit />} />


      </Routes>
      </BrowserRouter>
    
    </div >
  );
}

export default App;
