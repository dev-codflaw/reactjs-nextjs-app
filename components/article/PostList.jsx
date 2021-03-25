import { LinearProgress } from "@material-ui/core";
import {Container} from '@material-ui/core'
import PostItem from './PostItem'
import { Grid, Paper, Chip } from '@material-ui/core'


const PostList = ({ posts }) => {
    return(
        <>
            <Container maxWidth='sm'>
                <Grid>
                        {posts.map((post, index) => (<PostItem item={post} key={index} />))}
                </Grid>
            </Container>
        </>
    );
}

export default PostList;