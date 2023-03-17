import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from './comments.module.scss'

export default function Comments() {
    return (
        <Card sx={{ maxWidth: 340 , overflow: "auto", overflowY: "scroll"}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    by MattBertz
                </Typography>
                <Typography variant="h5" component="div">
                    GameInformer
                </Typography>
                <Typography variant="body2" className={styles.scroll}>
                    “RockStar has once again created a game that redefines the open-world experience. Red dead redemption II is a triumph that every gamer should expirence for themslves”
                    “RockStar has once again created a game that redefines the open-world experience. Red dead redemption II is a triumph that every gamer should expirence for themslves”
                    “RockStar has once again created a game that redefines the open-world experience. Red dead redemption II is a triumph that every gamer should expirence for themslves”
                    “RockStar has once again created a game that redefines the open-world experience. Red dead redemption II is a triumph that every gamer should expirence for themslves”
                    “RockStar has once again created a game that redefines the open-world experience. Red dead redemption II is a triumph that every gamer should expirence for themslves”
                    “RockStar has once again created a game that redefines the open-world experience. Red dead redemption II is a triumph that every gamer should expirence for themslves”
                    “RockStar has once again created a game that redefines the open-world experience. Red dead redemption II is a triumph that every gamer should expirence for themslves”
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    10/10
                </Typography>
            </CardContent>
        </Card>

);
}