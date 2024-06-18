/*import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';

const useStyles = makeStyles((theme) => ({
    hero: {
        backgroundImage: 'url(/path-to-your-image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        padding: '100px 0',
        textAlign: 'center',
    },
    button: {
        marginTop: theme.spacing(4),
    },
}));

const HeroSection = () => {
    const classes = useStyles();

    return (
        <Box className={classes.hero}>
            </Box>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide">
    </div>
    < class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide">
    </>
  </div>
</div>    
    );
};

export default HeroSection;*/

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/system';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import { Margin } from '@mui/icons-material';
import '../index.css';
import Image from 'react-bootstrap/Image';





const HeroSection = () => {
    return (
        <>  
                <Carousel>
      <Carousel.Item interval={101} >
        <ExampleCarouselImage text="First slide" />
        <Image src="carousel1.png"  height={200} width={1000} />
      </Carousel.Item>
      <Carousel.Item interval={101}>
        <ExampleCarouselImage text="Second slide" />
        <Image src="carousel2.png"  height={200} width={1000} />
      </Carousel.Item>
      <Carousel.Item interval={101}>
        <ExampleCarouselImage text="Third slide" />
        <Image src="carousel3.png"  height={200} width={1000} />
      </Carousel.Item>
      <Carousel.Item interval={101}>
        <ExampleCarouselImage text="Fourth slide" />
      <Image src="carousel4.png"  height={200} width={1000} />
      </Carousel.Item>
    </Carousel>
        </>
    );
};

export default HeroSection;
