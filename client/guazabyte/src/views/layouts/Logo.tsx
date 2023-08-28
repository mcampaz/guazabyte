import React from "react";
import Link from '@mui/material/Link';

import LogoImage from "../../assets/the_click_logo.png";

import "./Logo.css";
import { Button } from "@mui/material";


const Logo = () => {
    return(
            <Button href="/">
                <img src={LogoImage} className="logo-image" alt="Projects Index" />
            </Button>
    );
}

export default Logo;