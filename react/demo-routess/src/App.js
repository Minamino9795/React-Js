import { BrowserRouter, Route, Routes, json } from 'react-router-dom';
import List from './components/List';
import Create from './components/Create';
import Edit from './components/Edit';
import ListBook from './components/Book/ListBook';
import BookCreate from './components/Book/Create';
import EditBook from './components/Book/Edit';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          
          {/* router quản lý sách */}
          <Route path="/book" element={<ListBook/>} />
          <Route path="/book/create" element={<BookCreate/>} />
          <Route path="/book/edit/:id" element={<EditBook />} />
      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;