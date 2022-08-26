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
// import DetailMedia from './components/media/DetailMedia';
import DetailMediaMovie from './components/media/DetailMediaMovie';
import DetailMediaTv from './components/media/DetailMediaTv';

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
          <Route path="/details">
            <Route path="movie/:id" element={<DetailMediaMovie />} />
            <Route path="tv/:id" element={<DetailMediaTv />} />
          </Route>
          {/* <Route path="/media/:id" element={<DetailMedia />} /> */}
          {/* <Route path="/media/tv/:id" element={<DetailMedia />} /> */}
          <Route path="/search/:name" element={<SearchResult />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
