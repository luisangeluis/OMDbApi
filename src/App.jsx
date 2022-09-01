import { useEffect } from 'react';
//REDUX
import { useDispatch } from 'react-redux';
import { getGenresTv } from './store/slices/genresTv.slice';
import { getGenresMovie } from './store/slices/genresMovie.slice';
//ROUTES
import { Route, Routes } from 'react-router-dom';
import './App.css';
//COMPONENTS
import Home from './components/home/Home';
import MainLayout from './components/MainLayout';
import SearchResult from './components/search/SearchResult';
import DetailMedia from './components/media/DetailMedia';
import MovieView from './components/media/MovieView';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenresTv());
    dispatch(getGenresMovie());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<h2>login</h2>} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/media">
            <Route path="movie" element={<MovieView />} />
            <Route path="tv" element={<h2>hola</h2>} />
          </Route>
          <Route path="/details/:type/media/:id" element={<DetailMedia />} />
          <Route path="/search/:name" element={<SearchResult />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
