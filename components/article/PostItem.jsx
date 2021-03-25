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



const useStyles = makeStyles((theme) => ({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(1),
    },
    root: {
      maxWidth: 400,
    },
    media: {
      height: 0,
      paddingTop: '39.25%', // 16:9
      backgroundSize: 'cover'
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    cardBGColor: {
      // This '#' sign concat for make hax colorcode and '3d' contact for make color lighter.
      backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16)+'3d'
    }
  }));
  
  
  
  const PostItem = (props) => {
    const classes = useStyles();
    const [raised, setRaised] = useState(false)

    const toggleRaised = () =>  setRaised(true)
    const toggleDown = () =>  setRaised(false)

      return(
          <>
            <Grid item xs={12}>
            <Link 
                  href={{
                      pathname: '/post/[slug]',
                      query: {slug: props.item.slug},
                    }} 
                >
              <Card onMouseOver={toggleRaised} 
                    onMouseOut={toggleDown} 
                    raised={raised} 
                    style={{backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16)+'3d'}}>
              {props.item.image &&
                <CardMedia
                  className={classes.media}
                  image={`${server}`+props.item.image}
                  title="Paella dish"
              />}
              <CardContent>
                <span>
                    { new Date(props.item.updated_at).toLocaleString('default', {month:'short'})} &nbsp;
                    { new Date(props.item.updated_at).getDate()}
                </span>
                <h3>{props.item.title}</h3>
                  {props.item.tags.map((tag, index)=>
                              <span key={index}>
                                  <Chip
                                    label={tag.name}
                                    variant="outlined"
                                    size="small"
                                    color="primary"
                                  />&nbsp;
                                </span>
                                )}
              </CardContent>
              <CardActions>
                {/* <Link 
                  href={{
                      pathname: '/post/[slug]',
                      query: {slug: props.item.slug},
                    }} 
                >
                  Read More
                </Link> */}
              </CardActions>
            </Card></Link><br />
          </Grid>
          </>
      );
  }
  

  export default PostItem;