import { Route, Routes } from 'react-router-dom';
import FavoritePage from './pages/FavoritePage/FavoritePage';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path='/*' element={<MainPage />} />
        <Route path='/favorite' element={<FavoritePage />} />
      </Routes>
    </div>
  );
}

export default App;
