import { useEffect } from 'react';
//REDUX
import { useDispatch } from 'react-redux';
import { getGenres } from './store/slices/genres.slice';
//ROUTES
import { Route, Routes } from 'react-router-dom';
import './App.css';
//COMPONENTS
import Home from './components/Home';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<h2>login</h2>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
