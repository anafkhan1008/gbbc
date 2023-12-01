"use client"
import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import { css } from '@emotion/react';
import { Box, Typography, Container } from "@mui/material";
import styles from "../styles/Home.module.css";
import { Card, CardContent, IconButton , Paper  } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Slider from "react-slick";


function Activities() {
 

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
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
  






  const images = [
    "/static/one.jpg",
    "/static/two.jpg",
    "/static/three.jpg",
  ];

  const cardStyle = {
    display: 'flex',
    position: 'relative',
    height: '482px',
    maxWidth: '412px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'filter 0.3s ease-in-out',
    borderRadius: '10px',
    margin : '0 10px',
    '@media (max-width: 600px)': {
  
      maxWidth: '100%', 
      height: '492px', 
    },
    '@media (min-width: 601px) and (max-width: 960px)': {
      maxWidth: '100%', 
      height: '492px', 
    },

  };
  
const gradientOverlay = {
  content: '""',
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  background: 'radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
  transition: 'opacity 0.3s ease-in-out',
  opacity: 1,
  '& hover': {
    background : 'none'
  }
};
  const cardImageStyle = {
    display : 'flex',
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
    overflow: 'hidden',
    transition: 'filter 0.3s ease-in-out',
  };
  

  const contentStyle = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    padding: '50px 24px',
    maxWidth: '299px',

    transition: 'filter 0.3s ease-in-out',
  };
  
  const cardContainerStyle = {
    maxWidth: '1302px',
    margin: 'auto',
  };
  
  const iconStyle = {
    position: 'absolute',
    padding: '1px 20px',
    bottom: '50px',
    right: '24px',
    borderRadius: '30px',
    border: '2px solid #00B0E9',
    gap: '10px',
    
    /* Media query for smaller screens */
    '@media (max-width: 768px)': {
      padding: '0px 10px', 
      bottom: '50px', 
      right: '24px', 

    },
  };
  
  
  const handleMouseEnter = (e) => {
    e.currentTarget.querySelector('.gradient-overlay').style.opacity = 0;
  };
  
  const handleMouseLeave = (e) => {
    e.currentTarget.querySelector('.gradient-overlay').style.opacity = 1;
  };

 
  
  return (
    <Container
    maxWidth="xl"
    sx={{
      padding: "120px 20px",
      margin : 'auto',
      '@media (max-width: 600px)': {
        padding: "80px 10px", // Adjust padding for smaller screens
       // Adjust margin for smaller screens
      },
    }}
  >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent : 'center' , marginBottom : "70px" ,
        '@media (max-width: 550px)': {
          alignItems: "flex-start", 
          textAlign: "left", 
          marginBottom : '40px'
        }, }}
      >
        <Typography className={styles.activityhead}>Activities</Typography>
        <Typography className={styles.activitypara}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </Typography>
      </Box>


      <Box sx={cardContainerStyle}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box >
          <Card
            key={index}
            sx={cardStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={image} alt="activity" style={cardImageStyle} />
            <div className="gradient-overlay" style={gradientOverlay}></div>
            <CardContent sx={{ ...contentStyle, zIndex: "1" }}>
              <Typography className={styles.activityPhoto}>
                Policy and Regulatory Engagement
              </Typography>
            </CardContent>
            <Box sx={iconStyle}>
              <ArrowRightAltIcon sx={{ color: "#fff", fontSize: "40px" }} />
            </Box>
          
          </Card> </Box>
            ))}
          </Slider>
    
      </Box>
    </Container>
  );
}

export default Activities;


