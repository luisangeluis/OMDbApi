import { useEffect } from 'react';
//REDUX
import { useDispatch } from 'react-redux';
import { getGenres } from './store/slices/genres.slice';
//ROUTES
import { Route, Routes } from 'react-router-dom';
import './App.css';
//COMPONENTS
import Home from './components/home/Home';
import MainLayout from './components/MainLayout';
import SearchResult from './components/search/SearchResult';
import DetailMedia from './components/media/DetailMedia';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<h2>login</h2>} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<h2>movies</h2>} />
          <Route path="/series" element={<h2>series</h2>} />
          <Route path="/details/:type/media/:id" element={<DetailMedia />} />
          <Route path="/search/:name" element={<SearchResult />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
