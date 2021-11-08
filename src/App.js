
import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from './components/Post';
import Navbar from './components/Navbar';
const axios = require('axios');

function App() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    getApiResponse();
  }, [])

  async function getApiResponse() {
    const response = await axios.get('https://api.npoint.io/144c46739f80c9eeb6b7');
    setPostData(response.data.data)
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <ul>
          {
            postData.map((post) => {
              return (
                <Post user={post.user} content={post.content} content_image={post.content_image}
                likes={post.likes} total_comments={post.total_comments} shares={post.shares} />
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
