import React, { useState, useEffect} from 'react';
import axios from 'axios'
import CategoryItem from './CategoryItem'
import LinearProgress from '@material-ui/core/LinearProgress'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { server } from '../../config'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    main: {
        paddingTop: '30px',
        paddingBottom: '20px'
    }
  });

const CategoryList = ({ categories }) => {

    const classes = useStyles();

    const [error, setError] = useState(false);
    const [categoryDataArr, setCategoryDataArr] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(()=>{
        axios.get(`${server}/categories/`)
        .then(response => {
            console.log(response);
            setCategoryDataArr(response.data);
            setLoading(false);
        })
        .catch((error) => {
            // Error
            setError(true)
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the 
                // browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
        
    }, []);
  
  
  return (
    <div>
        <Container maxWidth="lg">
            {loading && <LinearProgress/> }

            {/* {JSON.stringify(axios.defaults.baseURL)} */}
            {/* {JSON.stringify(categoryDataArr)} */}
            <Grid container spacing={3} className={classes.main}>
                    {categoryDataArr.map((category, index) => < CategoryItem item={category} key={index}  /> )}
            </Grid>
        </Container>
    </div>
  )
}

export default CategoryList;