import Meta from '../components/common/Meta'
import axios from 'axios'
import { useState, useEffect } from 'react'
import PostList from '../components/article/PostList'
import {server} from '../config'


const posts = () => {
  const [dataArr, setDataArr] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const getPosts = async () => {
      const postsFromServer = await fetchPosts()
      setPosts(postsFromServer);
      setLoading(false);

    }

    getPosts()

      // axios.get('/posts/')
      // .then(function (response){
      //     console.log(response);
      //     setDataArr(response.data)
      //     // alert(JSON.stringify(dataArr))
      // })
      // .catch(function (error){
      //     console.log(error)
      // })
      // .then(function () {
      //     //always executed
      // });

  }, [])


  // Fetch Posts 
  const fetchPosts = async () => {
    const res = await axios.get(`${server}/posts/`);
    const data = await res.data;
    console.log(data);

    return data
  }


  // // Fetch Post
  // const fetchPost = async (slug) => {
  //   const res = await fetch(`http://127.0.0.1:8000/posts/${slug}`)
  //   const data = await res.json()

  //   return data
  // }

  return (
    <div>
          <Meta title='Posts' />
          <PostList posts={posts}/> 
    </div>
  )
}

export default posts





