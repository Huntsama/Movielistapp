import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import MovieList from './pages/MovieList';
import WatchedList from './pages/WatchedList';
import AddList from './pages/AddList';
import { GlobalProvider } from './redux/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/MovieList" element={<MovieList />} />
          <Route path="/WatchedList" element={<WatchedList />} />
          <Route path="/AddList" element={<AddList />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
