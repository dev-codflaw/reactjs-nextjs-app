import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { Grid, Paper, Chip } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/core/styles';
import {server} from '../../config'
import { useState } from 'react'
import Link from 'next/link'


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

    const [raised, setRaised] = useState(false)

    const toggleRaised = () =>  setRaised(true)
    const toggleDown = () =>  setRaised(false)

    return(
        <>
        <Grid item xs={12} sm={6} md={6} lg={4}>
            <Link href={{pathname: '/[category]', query: { category: props.item.slug, } }}>
            <Card onMouseOver={toggleRaised} onMouseOut={toggleDown} raised={raised}>
                <CardActionArea>
                    {props.item.image &&                     
                    <CardMedia
                        component="img"
                        alt="card image"
                        height="140"
                        image={`${server}`+props.item.image}
                    />}

                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            {props.item.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                
                
            </Card>
            </Link>

        </Grid>

        </>
    );
}


  export default CategoryItem;