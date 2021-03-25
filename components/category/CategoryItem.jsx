import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
import { Grid, Paper, Chip } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/core/styles';
import {server} from '../../config'


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    main: {
        paddingTop: '30px',
        paddingBottom: '20px'
    }
  });

  
const CategoryItem = (props) => {
    const classes = useStyles();

    return(
        <>
            <Grid item xs={12} sm={6} md={6} lg={4}>
            <Card className={classes.root}>
                <CardActionArea>
                    {props.item.image &&                     
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={`${server}`+props.item.image}
                    />}

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.item.name}
                        </Typography>
                        {/* <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography> */}
                    </CardContent>
                </CardActionArea>
            </Card>
            </Grid>

        </>
    );
}


  export default CategoryItem;