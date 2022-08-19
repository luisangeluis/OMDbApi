import { useEffect } from 'react';
//REDUX
import { useDispatch } from 'react-redux';
import { getGenres } from './store/slices/genres.slice';
//ROUTES
import { Route, Routes } from 'react-router-dom';
import './App.css';
//COMPONENTS
import Home from './components/Home';
import MainLayout from './components/MainLayout';
import SearchResult from './components/search/SearchResult';

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
          <Route path="/search/:name" element={<SearchResult />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
