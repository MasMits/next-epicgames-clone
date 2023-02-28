import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Comments() {
    return (
        <Card sx={{ maxWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    by MattBertz
                </Typography>
                <Typography variant="h5" component="div">
                    GameInformer
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    10/10
                </Typography>
                <Typography variant="body2">
                    “RockStar has once again created a game that redefines the open-world experience. Red dead redemption II is a triumph that every gamer should expirence for themslves”
                </Typography>
            </CardContent>
        </Card>
    );
}