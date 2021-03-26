import Container from '@material-ui/core/Container';
import {server} from '../../config'
import Chip from '@material-ui/core/Chip'
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';


const TagComponent = ({data}) => {
       
    return(
        <>
            {typeof(data) !== 'undefined' ? (
                data.map((tag, index)=> (<span key={index}>
                    <Chip
                      label={tag.name}
                      variant="outlined"
                      size="small"
                      color="primary"
                    />&nbsp;
                  </span>))
            ): (
                <span>Not have</span>
            )}
            {/* {JSON.stringify(data)} */}
        </>
    );
}

const PostImage = (props)=> {
    return(
        <>
            <img style={{width: '100%', height: '50%'}} src={props.image}  />
        </>
    ); 
}


const useStyles = makeStyles((theme) => ({
    featuredImg:{
        width: '50px',
        height: '50px'
    }
  }));

  
const PostDetail = ({item}) => {
    const classes = useStyles();

    return(
        <>
            <Container maxWidth="lg">

                {item.image && 
                    <PostImage image={`${server}`+item.image} />
                }

                <Typography component="h3" variant="h4">
                    {item.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    { new Date(item.updated_at).toLocaleString('default', {month:'short'})} &nbsp;
                    { new Date(item.updated_at).getDate()}
                    </Typography>  
                <TagComponent data={item.tags}/><br/>
                <Typography component="h2" variant="h5">
                    {item.subtitle}
                </Typography>
                <Typography component="p" variant="strinig">
                    <div dangerouslySetInnerHTML={{__html:item.content}}></div>
                </Typography>

            </Container>
        </>
    );
}

PostDetail.propTypes = {
    post: PropTypes.object,
  };

export default PostDetail;
