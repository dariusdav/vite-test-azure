import "./App.css";
import { Routes, Route } from 'react-router-dom';
import PersonalGameList from './pages/PersonalGameList';
import Home from './pages/Home';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route 
        path="/personal-game-list/:steamId" 
        element={<PersonalGameList />} 
      />
    </Routes>
  );
}
