import React from 'react';
import { Card }  from '@mui/material';
import { Box, Stack, Divider, Paper } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import { HomeData } from "../../data/local/HomeData";
import MyCarousel from '../../components/MyCarousel/MyCarousel';
// import SocialMedia from "../../layouts/SocialMedia"
import styles from "./Home.css";


let images = HomeData.map((item) => item);

const Home = () => {
  return (
    <Stack  
      direction={{ 
        mobile: 'column-reverse', 
        tablet: 'row', 
        laptop: 'row', 
        desktop: 'row', 
        widescreen: 'row'
      }}   
    >
      {/* <Box flex={{mobile: '100%', tablet: '60%', laptop: '50%', desktop: '50%', widescreen: '50%'}} ml={5} 
           paddingX='0px'
           paddingTop={{ mobile: '5px', tablet: '100px', desktop: '100px', widescreen: '120px'}}
      >
        <Card padding={10} elevation={0}>
          <CardContent >
              <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>        
                THE CLICK
              </Typography>
              <Box paddingBottom={2} paddingTop={3} fontSize={'1.2em'}>
              En The Click, nuestra pasión es ofrecerte un servicio 
                de primera categoría que supere tus expectativas. 
                Sumérgete en un mundo de estilo y elegancia con 
                nuestro servicio de fotografía y creación audiovisual.
                </Box>
                <Box fontSize={'1.2em'}>
                Llevamos lo profesional a otro nivel, capturando 
                la esencia de cada instante con precisión y arte. 
                Nuestro compromiso con la excelencia y el buen 
                gusto se refleja en cada imagen que creamos. 
              </Box>
              <Box fontSize={'1.2em'} paddingTop={2}>
              Atrévete a explorar nuevos horizontes, a abrazar lo desconocido 
              y a crear recuerdos inolvidables. No te conformes con lo ordinario, 
              atrévete a vivir una experiencia extraordinaria con The Click.  
              </Box>
              <Box sx={{mt: 10}}>
                <SocialMedia />
              </Box>
          </CardContent>
        </Card>
      </Box> */}
      <Box flex={{mobile: '100%', tablet: '100%', laptop: '100%', desktop: '100%', widescreen: '100%'}}>
        <div className='my_carousel' >
          <MyCarousel Data={images} />
          <CardMedia>
            Marketing, We build your digital brand and social media image. Development; Creating solutions systems customized to your needs!. Internet and Mobile applications; Building your Internet and Mobile Applications efficiently!
            Are you struggling to build your digital brand and social media image? We can help! 
Our team specializes in developing customized solutions systems tailored to your needs. 
Whether you need a website, app, or software, we've got you covered. 
We are experts in building Internet and Mobile applications efficiently and effectively. 
Don't waste your time and money on cookie-cutter solutions. 
We take the time to understand your unique requirements and create a solution that works for you. 
Our development process is transparent and collaborative. 
You'll have full visibility into every step of the project. 
We pride ourselves on delivering high-quality work on time and within budget. 
With our help, your digital presence will soar to new heights.
          </CardMedia>
        </div>
      </Box>
    </Stack>
  );
}
export default Home