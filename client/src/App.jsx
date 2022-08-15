import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ForumView from './components/forum/ForumView.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Events from './components/events/Events.jsx';
import Header from './components/header/Header.jsx';
// import UserProfile from './components/userprofile/UserProfile.jsx';
import LiveChat from './components/livechat/LiveChat.jsx';
import './global.scss';


const App = () => {
  return (
    <div>
      <Header />
      <div className='view_port'>
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path='/' element={<ForumView />} />
            <Route path='events' element={<Events />} />
            {/* <Route path='/profile/:username'
             element={<UserProfile />} /> */}
            <Route path='/' element={<ForumView />} />,
            <Route path='/livechat' element={<LiveChat />} />,
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
