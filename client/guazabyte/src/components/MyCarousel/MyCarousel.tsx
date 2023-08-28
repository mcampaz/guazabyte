import { useState, useEffect } from "react"; 
import { Box } from "@mui/material";
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';
import ArrowBackIosTwoToneIcon from '@mui/icons-material/ArrowBackIosTwoTone';

import "./MyCarousel.css";
import React from "react";
  
const MyCarousel = (props) => {

    const [currImage, setCurrImage] = useState(0);

    const previousPicture = () => {
        currImage > 0 ? setCurrImage(currImage - 1) : setCurrImage(props.Data.length - 1);
    }

    const nextPicture = () => {
       currImage < props.Data.length - 1 ? setCurrImage(currImage + 1) : setCurrImage(0);
    }

    const timerTrigger = useEffect(() => {
        const timer = setTimeout(() => {
          nextPicture();
        }, 8000);
        return () => {
            clearTimeout(timer);
        };
      });

    return (
        <Box sx={{
                maxWidth: '100%',
                minWidth: '100%',
                maxHeight: '100%',
                minHeight: '100%',
                width: '100%',
                height: '100%',
                paddingTop: { mobile: '0px', tablet: '50px', laptop: '100px', desktop: '100px', widescreen: '50px'},
                paddingLeft: { mobile: '0px', tablet: '50px', laptop: '75px', desktop: '100px', widescreen: '200px'},
                paddingRight: { mobile: '0px', tablet: '20px', laptop: '50px', desktop: '100px', widescreen: '100px'}
            }}
        >
            <div className="carousel" sx={{height: {mobile: '100%', tablet: '100%', laptop: '100%', desktop: '100%', widescreen: '100%'}}}>
                <div className="carouselInner" style={{ backgroundImage: `url(${props.Data[currImage].original})`}}>
                    <div className="left">
                        <div className="forward">   
                            <ArrowBackIosTwoToneIcon fontSize="large"  
                                onClick={previousPicture}
                            />
                        </div>
                    </div>
                    <div className="center"></div>
                    <div className="right">
                        <div className="forward">
                            <ArrowForwardIosTwoToneIcon fontSize="large"  
                                onClick={nextPicture}  
                            />
                        </div>
                    </div>
                </div>
            </div>   
        </Box>

    );

}

export default MyCarousel;