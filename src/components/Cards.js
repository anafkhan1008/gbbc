"use client";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "@mui/material/styles";
import { MobileStepper, Box, IconButton, Container } from "@mui/material";
import styled from "@emotion/styled";
import styles from "../styles/Home.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import useMediaQuery from '@mui/material/useMediaQuery';

const cardsData = [
  {
    id: 1,
    title: "New Post",
    image: "/static/one.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ",
  },
  {
    id: 2,
    title: "New Post",
    image: "/static/two.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ",
  },
  {
    id: 3,
    title: "New Post",
    image: "/static/three.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ",
  },
  {
    id: 4,
    title: "New Post",
    image: "/static/one.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ",
  },
  {
    id: 5,
    title: "New Post",
    image: "/static/two.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ",
  },
  {
    id: 6,
    title: "New Post",
    image: "/static/three.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ",
  },
];

const StyledCards = styled(Box)({
  margin: 'auto',
  width: '1300px',
  backgroundColor: '#DDEDFC',
  position: 'relative',
  paddingBottom: '40px',
  gap: '10px',
  // Ensuring display is set to flex
  // Allowing flex items to wrap on smaller screens
  justifyContent: 'center', // Aligning cards at the center
  '@media (max-width: 426px)': {
    width: '100%',
    padding: '20px',
    flexDirection: 'column',
    alignItems: 'center', // Aligning cards in a column at the center
  },
});


export default function Cards() {
  const isSmallScreen = useMediaQuery('(max-width:850px)');
  const isMediumScreen = useMediaQuery('(max-width : 780px');
  const sliderRef = useRef(null);

  const theme = useTheme();
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [activeStep, setActiveStep] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  const isClient = typeof window !== "undefined";

  const updateSlidesToShow = () => {
    setScreenWidth(window.innerWidth);
    if (window.innerWidth <= 600) {
      setSlidesToShow(1);
    } else if (window.innerWidth <= 966) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(3);
    }
  };

  useEffect(() => {
    if (isClient) {
      updateSlidesToShow();
      window.addEventListener("resize", updateSlidesToShow);
      return () => {
        window.removeEventListener("resize", updateSlidesToShow);
      };
    }
  }, [isClient]);

  const maxSteps = Math.ceil(cardsData.length / slidesToShow);

  const updateSlider = (step) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(step);
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      const nextStep = prevActiveStep + 1;
      const newActiveStep = nextStep ;
      updateSlider(newActiveStep);
      return newActiveStep;
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => {
      const prevStep = prevActiveStep - 1;
      const newActiveStep =  prevStep;
      updateSlider(newActiveStep);
      return newActiveStep;
    });
  };
  const settings = {
  
    slidesToShow: 3,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  


  return (
    <Box sx={{display : 'flex',backgroundColor: "#DDEDFC"  , justifyContent : 'center' , flexDirection : 'column'}} >
      <Box  sx={{margin : 'auto' , paddingBottom: "200px" }} >


      <Box style={{ padding: "24px  32px " , margin : 'auto' }}>
        <Typography className={styles.newshead}>News</Typography>
    
        {screenWidth <= 600 ? (
          <Box
            sx={{
              display: "flex",
              width : '100%',
              alignItems : 'center',
              margin : 'auto',
            
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {cardsData.map((card) => (
              <Box  sx={{display : 'flex' , justifyContent : 'center', alignItems : 'center' , margin: "auto",  
              '@media (max-width: 426px)': {
                width: "100%", 
             
    
              }, }}>
              <Card
                key={card.id}
                sx={{
                  width: '100%', // Take full width on smaller screens
                  margin: '20px', // Adjust margin for smaller screens
                  borderRadius: '0 px',
                  '@media (max-width: 426px)': {
                    margin: '10px', // Adjust margin for even smaller screens
                  },}}
              >
                <CardMedia
                  sx={{ height: 216, marginBottom: "10px", display: "flex" }}
                  image={card.image}
                  title={card.title}
                />
                <CardContent sx={{ padding: "24px" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      color: "#060B43",
                      fontFamily: "Titillium Web",
                      fontSize: "24px",
                      fontWeight: "700",
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
                    {card.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button className={styles.seemore}>See more</Button>
                  <OpenInNewIcon
                    sx={{ width: "20px", height: "20px", color: "#005A9B" }}
                  />
                </CardActions>
              </Card></Box>
            ))}
          </Box>
        ) : (
          <StyledCards >
            <Slider
              ref={sliderRef}
              afterChange={(index) => setActiveStep(index)}
              initialSlide={activeStep}
              nextArrow={<ArrowForwardIosIcon/>} 
              prevArrow={<ArrowBackIosIcon/>}
              style={{ marginBottom: "30px" }}
              {...settings}
              
            >
              {cardsData.map((card) => (
                <div key={card.id}>
                  <Card
                    sx={{
                      width: "420px",
                      
                      borderRadius: "10px",
                    }}
                  >
                    <CardMedia
                      sx={{
                        height: 216,
                        marginBottom: "10px",
                        display: "flex",
                      }}
                      image={card.image}
                      title={card.title}
                    />
                    <CardContent sx={{ padding: "24px" }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          color: "#060B43",
                          fontFamily: "Titillium Web",
                          fontSize: "24px",
                          fontWeight: "700",
                        }}
                      >
                        {card.title}
                      </Typography>
                      <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
                        {card.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button className={styles.seemore}>See more</Button>
                      <OpenInNewIcon
                        sx={{ width: "20px", height: "20px", color: "#005A9B" }}
                      />
                    </CardActions>
                  </Card>
                </div>
              ))}
            </Slider>
            <MobileStepper
              variant="progress"
              steps={6}
              position="static"
              activeStep={activeStep}
              sx={{
                maxWidth: '500px', 
                flexGrow: 1,
                margin: 'auto',
                backgroundColor: '#DDEDFC',
                '@media (max-width: 600px)': {
                  padding: '10px', // Adjust padding for smaller screens
                  bottom: '10px', // Adjust position for smaller screens
                },}}
              nextButton={
                <IconButton size="small" onClick={handleNext}>
                  <ArrowForwardIosIcon
                    sx={{ fontSize: "24px", color: "#00306F" }}
                  />
                </IconButton>
              }
              backButton={
                <IconButton size="small" onClick={handleBack}>
                  <ArrowBackIosIcon
                    sx={{ fontSize: "24px", color: "#00306F" }}
                  />
                </IconButton>
              }
            />
          </StyledCards>
        )}

        <Box className={styles.outerbox} >
          <Box className={styles.newsbutton}>
            <Typography className={styles.newsinside}>
              View More News
            </Typography>
            <ArrowForwardIcon sx={{ color: "#005A9B" }} />
          </Box>
        </Box>
      </Box>
      </Box>
      <Box className={styles.joinbox} sx={{ display: 'block', zIndex : "100" , margin: isMediumScreen ? '0' : '0 130px', position: 'relative', top: isMediumScreen ? '0' : '200px' , 
    bottom: isMediumScreen ? '0' : '200' , borderRadius : isMediumScreen ? "0" : "10px" }}  >
        <Typography className={styles.joinhead}> Join the GBBC </Typography>
        <Typography className={styles.joinheadtwo} > Blurb about membership </Typography>
        <Typography className={styles.joinheadthree}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, animi vero! Et consequuntur </Typography>

        <Button variant='container' className={styles.joinbutton}>
            <Typography className={styles.joinbuttoninside}>   Become a member </Typography>
       
        </Button>
    </Box>
    </Box>
  );
}
