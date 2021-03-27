import React, { useState, useEffect} from 'react';
import axios from 'axios'
import CategoryItem from './CategoryItem'
import LinearProgress from '@material-ui/core/LinearProgress'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { server } from '../../config'



const CategoryList = ({ categories }) => {

    const [error, setError] = useState(false);
    const [categoryDataArr, setCategoryDataArr] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        axios.get(`${server}/api/category/`)
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
        <Grid container spacing={3} >
            {categoryDataArr.map((category, index) => ( <CategoryItem item={category} key={index} />) )}
        </Grid>
        
    </Container>
    </div>
  )
}

export default CategoryList;