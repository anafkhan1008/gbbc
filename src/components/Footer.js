import Box from '@mui/material/Box';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import useMediaQuery from '@mui/material/useMediaQuery';
import styles from '../styles/Home.module.css';

function Footer() {
  const isSmallScreen = useMediaQuery('(max-width:850px)');
  const isverySmallScreen = useMediaQuery('(max-width:567px)');
  return (
    <Box
      sx={{
        backgroundColor: '#060B43',
        display: 'block',
        position: 'relative',
        zIndex : '-1',
        overflow: 'hidden',
      }}
    >
      <Box sx={{paddingTop: '340px' , display : 'flex' , flexDirection : isSmallScreen ? 'column' : 'row' , justifyContent : 'center' , alignItems : 'center', margin: 'auto'}}>

         <Box
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection : 'column',
                alignItems: 'center',
                padding: '30px',
                margin : 'auto'
              }}
            > <Image src="/static/logo.png" width={186} height={80} />
              <Typography
                variant="h6"
                color="initial"
                className={styles.footerpara}
              >
                Back to top <ArrowUpwardIcon />
              </Typography>
            </Box>
    
        <div  style={{display : 'flex' , flexDirection : 'row' , justifyContent : isverySmallScreen ?  'flex-start' : 'space-around' , flexWrap : 'wrap' ,width : isSmallScreen  ?  '90vw' : ' 70vw ',  margin : 'auto'}}>
         
          <div style={{display : 'flex' , flexDirection : 'column' , padding : '20px'}} >
            <Typography className={styles.footerhead}>Programs</Typography>
            <Typography  className={styles.footerpara}>lorem ipsum</Typography>
            <Typography  className={styles.footerpara}>lorem ipsum</Typography>
            <Typography  className={styles.footerpara}>lorem ipsum</Typography>
            <Typography  className={styles.footerpara}>lorem ipsum</Typography>
            {/* ... */}
          </div>
          <div  style={{display : 'flex' , flexDirection : 'column' , padding : '20px'}}>
            <Typography className={styles.footerhead}>Engage</Typography>
            <Typography variant="caption" color="initial" className={styles.footerpara}>lorem ipsum</Typography>
<Typography  className={styles.footerpara}>lorem ipsum</Typography>
<Typography  className={styles.footerpara}>lorem ipsum</Typography>
<Typography  className={styles.footerpara}>lorem ipsum</Typography>
            {/* Add your engage items here */}
            {/* ... */}
          </div>
          <div  style={{display : 'flex' , flexDirection : 'column', padding : '20px'}}>
            <Typography className={styles.footerhead}>Explore</Typography>
            <Typography variant="caption" color="initial" className={styles.footerpara}>lorem ipsum</Typography>
<Typography  className={styles.footerpara}>lorem ipsum</Typography>
<Typography className={styles.footerpara}>lorem ipsum</Typography>
<Typography  className={styles.footerpara}>lorem ipsum</Typography>
            {/* Add your explore items here */}
            {/* ... */}
          </div>
        
        </div>
      </Box>
      <div
        style={{
          display: 'flex',
          marginTop: '70px',
          flexDirection : isSmallScreen ? 'column' : 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '70px',
          padding: '32px 0 32px 0',
          borderTop: '#00306F 2px solid',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Inter',
            fontSize: '18px',
            color: '#EEF7FF',
            fontWeight: '600',
           textAlign : 'center',
            padding : '0 50px 0 50px'
          }}
        >
          &#169; Global Blockchain Business Council. All rights Reserved.
        </Typography>
        <div style={{display : 'flex' , justifyContent : 'space-around',width : '100%' , alignContent : 'center' }} >

            <Typography
          sx={{
            fontFamily: 'Inter',
            fontSize: '18px',
            color: '#EEF7FF',
            fontWeight: '600',
          }}
        >
          Terms
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Inter',
            fontSize: '18px',
            color: '#EEF7FF',
            fontWeight: '600',
          }}
        >
          Privacy Policy
        </Typography>
        </div>
      
      </div>
    </Box>
  );
}

export default Footer;




