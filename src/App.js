import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainBar from './views/mainBar/MainBar';
import Login from './views/authenticationPage/LoginPage'
import Register from './views/authenticationPage/RegisterPage'
import MyMusic from './views/pages/myMusic/MyMusic';
import RecentPlays from './views/pages/recentPlays/RecentPlays';
import NowPlaying from './views/pages/nowPlaying/NowPlaying';
import PlayList from './views/pages/playList/PlayList';
import Logout from './views/pages/logout/Logout';
import Settings from './views/pages/setting/Settings';


function App() {
  return (
    <>
    <Router>
      <Routes> 
      <Route path="/" element={<Login/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<MainBar />}>
          <Route path="/dashboard/my-music" element={<MyMusic/>}/>
          <Route path="/dashboard/recent-plays" element={<RecentPlays />} />
          <Route path="/dashboard/now-playing" element={<NowPlaying />} />
          <Route path="/dashboard/playlist" element={<PlayList />} />
          <Route path="/dashboard/logout" element={<Logout />} />
          <Route path="/dashboard/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
