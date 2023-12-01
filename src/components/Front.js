import React from "react";
import { Container, Box, Typography, Button, IconButton } from "@mui/material";
import styled from "@emotion/styled";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import MessageIcon from "@mui/icons-material/Message";

const StyledBox = styled(Box)({
  backgroundImage: ' url("/static/banner.png")',
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "112px 70px",

});

const Banner = styled(Box)({
  padding: "112px 70px",
  gap: "120px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flexShrink: "0",
  "@media (max-width: 436px)": {
     padding : '0 24px'
  },
});

const ButtonBox = styled(Box)({
  
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "32px",
  "@media (max-width: 436px)": {
    gap : '16px'
 },

});

const MessageButton = styled(IconButton)({
  position: "fixed",
  bottom: "20px",
  right: "20px",
  cursor: "pointer",
  display: "flex",
  padding: "8px",
  alignItems: "center",
  borderRadius: "50px",
  background: "#00B0E9",
  boxShadow: "0px 0px 4px 0px #FFF inset",
  gap: "59px",

  zIndex: "1000",
  "@media (max-width: 600px)": {
    bottom: "10px",
    right: "10px",
  },
  
});

function Front() {
  return (
    <StyledBox>
      <Banner>
        <Typography className={styles.fronthead}>
          Developing the next trillion dollar industry through
          <br />
          <span className={styles.frontheadtwo}>
            education, advocacy, and partnership
          </span>
        </Typography>

        <ButtonBox>
          <Button variant="contained" className={styles.contactButton}>
            Contact Us
          </Button>
          <Button variant="contained" className={styles.aboutButton}>
            About GBBC
          </Button>
        </ButtonBox>
      </Banner>

      <MessageButton aria-label="message" color="primary">
        <Image src="/static/message.svg" width={24} height={24} />
      </MessageButton>
    </StyledBox>
  );
}

export default Front;
