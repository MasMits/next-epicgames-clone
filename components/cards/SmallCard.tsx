import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {FC} from "react";
import {IGame} from "../../types/IGame";

const SmallCard: FC<IGame> = (game) => {
    return (
        <Card sx={{ display: 'flex', height: '80px', minWidth: 268}}>
            <CardMedia
                component="img"
                sx={{ width: 70 }}
                image="https://gmedia.playstation.com/is/image/SIEPDC/the-last-of-us-part-ii-desktop-banner-02-en-13nov20?$1600px$"
                alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="subtitle1" >
                        Одни из нас: Часть II
                    </Typography>
                    <Typography variant="caption" color="text.secondary" component="div" >
                        1000 UAH
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
}
export default SmallCard;