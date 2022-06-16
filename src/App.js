import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Navbar from './components/navbar';
import MovieList from './pages/MovieList';
import WatchList from './pages/WatchList';
import AddList from './pages/AddList';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/MovieList"   element={<MovieList/>} />        
        <Route path="/WatchList"   element={<WatchList/>}/>
        <Route path="/AddList"  element={<AddList/>} />
      </Routes>
    </Router>
  );
}

export default App;
