import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import MovieList from './pages/MovieList';
import WatchedList from './pages/WatchedList';
import AddList from './pages/AddList';


function App() {
  return (
    <Router>
      <Navbar />
     
      <Routes>
        <Route path="/MovieList" element={<MovieList />} />
        <Route path="/WatchedList" element={<WatchedList />} />
        <Route path="/AddList" element={<AddList />} />
      </Routes>
    </Router>
  );
}

export default App;
