import { Routes, Route } from "react-router-dom";
import Header from './components/Header'
import NotesPage from './pages/NotesPage'
import NotePage from './pages/NotePage'
import './main.css';


function App() {
  return (
    <div className='container'>
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/' exact element={<NotesPage />} />
          <Route path='note/:noteId' element={<NotePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
