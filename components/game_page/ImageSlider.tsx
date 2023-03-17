import React, {useState} from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import Button from "@mui/material/Button";
import styles from '../../styles/Home.module.scss';
import Box from "@mui/material/Box";

const ImageSlider = () => {
    let images = [
        'https://compass-ssl.xbox.com/assets/a2/a7/a2a75a75-5955-4e2e-bc3e-3e2ee1c33b9a.jpg?n=Red-Dead-Redemption-II_Gallery-0_1350x759_07.jpg',
        'https://compass-ssl.xbox.com/assets/c4/3d/c43d0753-6231-43f8-9ff5-450acb446fd0.jpg?n=Red-Dead-Redemption-II_Gallery-0_1350x759_08.jpg',
        'https://compass-ssl.xbox.com/assets/4c/57/4c574396-3275-49ae-818f-5e0da4b10ea2.jpg?n=Red-Dead-Redemption-II_Gallery-0_1350x759_10.jpg'
    ]
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((currentImage + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((currentImage - 1 + images.length) % images.length);
    };

    return (
        <Box className={styles.sliderContainer} sx={{display: "flex", justifyContent: "center", alightItems: "center", padding: 4}}>
            <Button variant="text" onClick={prevImage}>
                <ArrowBackIosNewIcon/>
            </Button>

            <Box sx={{width: 700, overflow: 'hidden'}} >
                <img
                    className={styles.image}
                    src={images[currentImage]}
                    alt={`Slide ${currentImage}`}
                    width='100%'
                />
            </Box>
            <div className={styles.arrowGroup}>
                <Button variant="text" onClick={nextImage}>
                    <ArrowForwardIosIcon/>
                </Button>
            </div>
        </Box>
    );
};

export default ImageSlider;
