import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";

import "./MyCarousel.css";
import Modal from "../../components/modal/Modal";
import Contact from "../../components/contact/Contact";
import React from "react";

const MyCarousel = (props) => {
  const [currImage, setCurrImage] = useState(0);
  const [openModalContact, setOpenModalContact] = useState<boolean>(false);

  const handleOpenCloseModalContact = () => {
    setOpenModalContact((value: boolean) => !value);
  };

  const previousPicture = () => {
    currImage > 0
      ? setCurrImage(currImage - 1)
      : setCurrImage(props.Data.length - 1);
  };

  const nextPicture = () => {
    currImage < props.Data.length - 1
      ? setCurrImage(currImage + 1)
      : setCurrImage(0);
  };

  const timerTrigger = useEffect(() => {
    const timer = setTimeout(() => {
      nextPicture();
    }, 8000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <>
      <Box
        sx={{
          maxWidth: "100%",
          minWidth: "100%",
          maxHeight: "100%",
          minHeight: "100%",
          width: "100%",
          height: "100%",
          paddingTop: {
            mobile: "0px",
            tablet: "50px",
            laptop: "100px",
            desktop: "100px",
            widescreen: "50px",
          },
          paddingLeft: {
            mobile: "0px",
            tablet: "50px",
            laptop: "75px",
            desktop: "100px",
            widescreen: "200px",
          },
          paddingRight: {
            mobile: "0px",
            tablet: "20px",
            laptop: "50px",
            desktop: "100px",
            widescreen: "100px",
          },
        }}
      >
        <Box
          className="carousel"
          sx={{
            height: {
              mobile: "100%",
              tablet: "100%",
              laptop: "100%",
              desktop: "100%",
              widescreen: "100%",
            },
          }}
        >
          <div
            className="carouselInner"
            style={{
              backgroundImage: `url(${props.Data[currImage].original})`,
            }}
          >
            <div className="contentCarousel">
              <Typography variant="h1" gutterBottom>
                <strong>GuazaByte</strong>
              </Typography>
              <Typography variant="h4">
                <strong>2004 Burroughs St</strong>
              </Typography>
              <Typography variant="h4" gutterBottom>
                <strong>San Diego, CA 9211</strong>
              </Typography>
              <br />
              <Button
                variant="contained"
                color="primary"
                sx={{
                  height: 50,
                  width: 150,
                  fontSize: "1.3rem",
                }}
                onClick={handleOpenCloseModalContact}
                size="large"
              >
                Contact
              </Button>
            </div>
            <div className="left">
              <div className="forward">
                <ArrowBackIosTwoToneIcon
                  fontSize="large"
                  onClick={previousPicture}
                />
              </div>
            </div>
            <div className="center"></div>
            <div className="right">
              <div className="forward">
                <ArrowForwardIosTwoToneIcon
                  fontSize="large"
                  onClick={nextPicture}
                />
              </div>
            </div>
          </div>
        </Box>
      </Box>
      <Modal
        disableBackdropClick
        open={openModalContact}
        close={handleOpenCloseModalContact}
        title="Contact"
        content={<Contact />}
        size="sm"
      />
    </>
  );
};

export default MyCarousel;
