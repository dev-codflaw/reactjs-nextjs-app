import axios from 'axios'
import { useState, useEffect } from 'react'
import Meta from '../components/common/Meta'
import PostList from '../components/article/PostList'
import { LinearProgress } from '@material-ui/core'
import {server} from '../config'



const latest = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const getPosts = async () => {
      const postsFromServer = await fetchPosts()
      setPosts(postsFromServer);
      setLoading(false);
    }

    getPosts()
  }, [])


  // Fetch Posts 
  const fetchPosts = async () => {
    const res = await axios.get(`${server}/posts/latest/`);
    const data = await res.data;
    console.log(data);
    return data
  }

  return (
      <>
          <Meta title='Latest' />
          <h4>Latest Posts</h4>
          {loading && <LinearProgress/>}
          <PostList posts={posts}/>   
      </>
  )
}

export default latest;





