import React, {FC, useState} from 'react';
import {ICardProps} from "../../types/IGame";
import Typography from '@mui/material/Typography';
import {Box} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import MediumCard from "../cards/MediumCard";
import Fab from '@mui/material/Fab';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Link from "next/link";
import {games} from "../../pages/api/data/games";

const MediumCardContainer: FC<ICardProps> = (gameList) => {

    // const [firstElement, setFirstElement] = useState(0);
    // const [lastElement, setLastElement] = useState(4);
    //
    // var items = games.slice(firstElement, lastElement).map(i => {
    //     return <MediumCard id={i.data.id} data={i.data.data} />
    // });
    // const rightClick = (e) => {
    //     e.preventDefault();
    //     setFirstElement(firstElement + 1);
    //     setLastElement(lastElement + 1);
    //     items = games.slice(firstElement, lastElement).map(i => {
    //         return <MediumCard key={i.data.id} data={i.data.data} />
    //     });
    // }

    return (
        <div className="MediumCardContainer">
            <Box className="header" sx={{ display: 'flex', justifyContent: 'space-between', maxWidth:1170}}>
                <div><Typography sx={{color: 'white'}}>Most Popular</Typography></div>

                <div className="arrows_container">
                    <div><Fab size="small" aria-label="add">
                        <KeyboardArrowLeftIcon/>
                    </Fab></div>
                    <div><Fab size="small" aria-label="right_arrow">
                        <KeyboardArrowRightIcon/>
                    </Fab></div>
                </div>
            </Box>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 4 }}  >
                {/*{gameList.games.map((item) =>*/}
                {/*    <Grid xs={1} sx={{ display: 'flex', justifyContent:"center"}}>*/}
                {/*        <Link href={`browse/${item.data.id}`}><MediumCard key={item.data.id} data={item.data}/></Link>*/}
                {/*    </Grid>*/}
                {/*)}*/}
            </Grid>
            {/*<Grid container spacing={{ xs: 2, md: 3 }} >*/}
            {/*    {items.map((item) =>*/}
            {/*        <Grid item xs={12} md={6} lg={3}>*/}
            {/*            <Link href={`browse/${item.data.id}`}><MediumCard key={item.data.id} data={item.data}/></Link>*/}
            {/*        </Grid>*/}
            {/*    )}*/}
            {/*</Grid>*/}
        </div>
    );
}

export default MediumCardContainer;