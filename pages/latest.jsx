import axios from 'axios'
import { useState, useEffect } from 'react'
import Meta from '../components/common/Meta'
import PostList from '../components/article/PostList'
import { LinearProgress } from '@material-ui/core'
import {server} from '../config'
import {Container} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));


// latest page
const latest = () => {
  const classes = useStyles();

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
          <div className={classes.root}>
            {loading && <LinearProgress />}
          </div>
          <Container maxWidth='sm'>
              <PostList posts={posts}/>   
          </Container>
      </>
  )
}

export default latest;





