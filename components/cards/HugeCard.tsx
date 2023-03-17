import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {FC} from "react";
import {IGame} from "../../types/IGame";



const HugeCard: FC<IGame> = (game) => {
    return (
        <Card sx={{ maxWidth: 868, maxHeight: 580 }}>
            <CardMedia
                component="img"
                height="243"
                image={game.data.header_image}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="subtitle1" component="div">
                    {game.data.game_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {game.data.short_description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button  variant="outlined" size="small">+ Add to wishlist</Button>
                <Button  variant="contained" size="small">Learn more</Button>
            </CardActions>
        </Card>
    );
}
export default HugeCard;