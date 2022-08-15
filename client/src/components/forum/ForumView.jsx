import React from 'react';
import Sidebar from '../sidebar/Sidebar.jsx';
import Cards from './Cards.jsx';
import './_forums.scss';

import forumStore from '../../zustand.js';
const ForumView = () => {
  const posts = forumStore((state) => state.posts);
  console.log(posts);
  return (
    <div className="forumView">
      {posts.map((post, x) => {
        return <Cards key={x + post} post={post} />;
      })}
    </div>
  );
};

export default ForumView;


// let post = {
//   "title": 'Hello world',
//   "content": 'This is my first forum post!',
//   "photo": null,
//   "time": 'time',
//   "votes": 69,
//   "user": 'David',
//   "language": 'English',
//   "jargon": 'Sleep, Dreams, Nightmares'
// }

// title
// content
// photo
// time
// vote
// user
// language
// jargon (if applicable)
