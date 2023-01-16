import * as React from 'react';
import {FC} from "react";
import {IGame} from "../../types/IGame";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const MediumCard: FC<IGame> = (game) => {
    return (
        <Card sx={{maxWidth: 265, maxHeigth: 403}}>
            <CardMedia
                component="img"
                height="327"
                width="265"
                image={game.data.header_image}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="subtitle1" component="div">
                    {game.data.game_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   200 UAH
                </Typography>
            </CardContent>
        </Card>
    );
}

export default MediumCard;