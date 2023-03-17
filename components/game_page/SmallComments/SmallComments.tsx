import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import styles from './smallcomments.module.scss'

export default function SmallComments() {
    return (
        <Card sx={{ maxWidth: '400px'}}>
            <CardContent >
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    by MattBertz
                </Typography>
                <Typography variant="h6" component="div">
                    GameInformer
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    10/10
                </Typography>
            </CardContent>
        </Card>

    );
}