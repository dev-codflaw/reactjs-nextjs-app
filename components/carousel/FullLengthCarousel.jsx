import React from 'react'
import { Container } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import {
    Paper,
    Button,
} from '@material-ui/core'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {server} from '../../config'

function Project(props) {
    return (
        <Paper
            className="Project"
            style={{
                backgroundColor: '#cfcfcf',
                // paddingTop: "50px"
            }}
            elevation={10}
            // `URL('https://cms.codflaw.com/${props.item.slide_img}')`
        >
            <div style={{backgroundImage: `URL('${server}${props.item.slide_img}')`,
             height: '450px',
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat'
             }}>
                 <div style={{
                    // backgroundColor: '#cfcfcf',
                    paddingTop: '15px',
                    paddingBottom: '15px',
                    paddingLeft: '15px',
                    paddingRight: '15px',
                    color: 'white'
                    
                  }}>
                    <h2>{props.item.title_on_slide}</h2>
                    <p>{props.item.desc_on_slide}</p>

                    {/* <Button href={props.item.call_to_action_link_on_slide} className="CheckButton">
                        Check it out!
                    </Button> */}
                 </div>
                
            </div>

        </Paper>
    )
}

const FullLengthCarousel = () => {
    const [slideDataArr, setSlideDataArr] = useState([]);

    useEffect(() => {
        axios.get(`${server}/carousel/1/`)
        .then(function (response){
            console.log(response)
            setSlideDataArr(response.data.images)

        })

        .catch(function(error){
            console.log(error)
        })
        .then(function(){
            //always execute
        });
    }, [])

    return(
        <React.Fragment>
            <Carousel
                    autoPlay={false}
                    animation={"fade"}
                    indicators={true}
                    timeout={500}
                    navButtonsAlwaysVisible={false}
                    navButtonsAlwaysInvisible={false}

                >
                    {
                        slideDataArr.map((item, index) => {
                            return <Project item={item} key={index} />
                        })
                    }
            </Carousel>
        </React.Fragment>
    );
}

export default FullLengthCarousel;