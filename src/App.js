import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainBar from './views/mainBar/MainBar';
import MyMusic from './views/pages/myMusic/MyMusic';
import RecentPlays from './views/pages/recentPlays/RecentPlays';
import NowPlaying from './views/pages/nowPlaying/NowPlaying';
import PlayList from './views/pages/playList/PlayList';
import Logout from './views/pages/logout/Logout';

function App() {
  return (
    <>
    <Router>
      <Routes> 
          <Route path="/" element={<MainBar />}> 
          <Route path="/dashBoard" element={<MainBar />} />
          <Route path="/my-music" element={<MyMusic />} />
          <Route path="/recent-plays" element={<RecentPlays />} />
          <Route path="/now-playing" element={<NowPlaying />} />
          <Route path="/playlist" element={<PlayList />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
