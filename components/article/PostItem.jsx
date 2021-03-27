import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button'
import { Grid, Paper, Chip } from '@material-ui/core'
import Link from 'next/link'
import { server } from '../../config'
import { useState } from 'react'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';


const useStyles = makeStyles((theme) => ({
    media: {
      height: 0,
      paddingTop: '39.25%', // 16:9
      backgroundSize: 'cover'
    },

    avatar: {
      backgroundColor: red[500],
    },
    cardBGColor: {
      // This '#' sign concat for make hax colorcode and '3d' contact for make color lighter.
      backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16)+'3d'
    },
    card: {
      display: 'flex',
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 160,
    },
  }));
  
  

  const PostItem = (props) => {
    // const { post } = props;

    const classes = useStyles();
    const [raised, setRaised] = useState(false)
    const [categoryName, setCategoryName] = useState(props.item.category ? props.item.category.slug : 'blog');

    const toggleRaised = () =>  setRaised(true)
    const toggleDown = () =>  setRaised(false)

    


      return(
          <>

            <Grid item xs={12}>
            {/* <Link href={{pathname: '/post/[slug]', query: {slug: props.item.slug},}} > */}
            <Link href={{pathname: '/[category]/[slug]', query: {slug: props.item.slug, category: categoryName},}} >
            <CardActionArea component="a"  >
              <Card className={classes.card} onMouseOver={toggleRaised} onMouseOut={toggleDown} raised={raised}
              style={{backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16)+'3d'}}>
                <div className={classes.cardDetails}>
                  
                {props.item.image &&
                            <CardMedia
                              className={classes.media}
                              image={`${server}`+props.item.image}
                              title="Card Image"
                          />}
                  <CardContent style={{paddingBottom: '0px'}}>
                    <Typography variant="subtitle1" color="textSecondary">
                      { new Date(props.item.updated_at).toLocaleString('default', {month:'short'})} &nbsp;
                      { new Date(props.item.updated_at).getDate()}
                    </Typography>
                    <Typography variant="overline" color="primary">
                      {props.item.category && props.item.category.name}
                    </Typography>        
                    <Typography component="h2" variant="h5">
                      {props.item.title}
                    </Typography>
                    <Typography component="h2" variant="h5">
                      {props.item.tags.map((tag, index)=> (
                                            <span key={index}>
                                              
                                                <Chip
                                                  label={tag.name}
                                                  variant="outlined"
                                                  size="small"
                                                  color="primary"
                                                />&nbsp;
                                              </span>)
                                              )}
                    </Typography>

                    <Typography variant="button" color="primary">
                      <p>Read Article</p>
                    </Typography>
                  </CardContent>
                </div>
              </Card><br/>
            </CardActionArea>
            </Link>
            </Grid>
          </>
      );
  }
  
PostItem.propTypes = {
  post: PropTypes.object,
};

export default PostItem;


