import PostItem from './PostItem'
import Grid from '@material-ui/core/Grid'

const PostList = ({ posts }) => {
    return(
        <Grid>
            {posts.map((post, index) => (<PostItem item={post} key={index} />))}
        </Grid>
    );
}

export default PostList;