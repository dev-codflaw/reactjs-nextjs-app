import axios from 'axios'
import { useState, useEffect } from 'react'
import Meta from '../components/common/Meta'
import PostList from '../components/article/PostList'
import { LinearProgress } from '@material-ui/core'
import {server} from '../config'
import {Container} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";


const useStyles = makeStyles((theme) => ({
  
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}));


// latest page
const latest = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

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
          <Container maxWidth='sm' style={{paddingTop:'20px', paddingBottom:'20px'}}>
            {loading && 
              <Backdrop className={classes.backdrop} open={open} >
                <CircularProgress color="inherit" />
              </Backdrop>
            }
            {loading ? <LinearProgress /> : <PostList posts={posts}/> }
                
          </Container>
      </>
  )
}

export default latest;





