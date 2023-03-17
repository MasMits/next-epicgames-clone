import React, {FC} from 'react';
import LargeCard from "../cards/LargeCard";
import {ICardProps} from "../../types/IGame";
import Box from "@mui/material/Box";
// import {Grid} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Link from "next/link";

const LargeCardContainer: FC<ICardProps> = (gameList) => {
    return (
        <div>
            <Box className="header" sx={{display: 'flex', justifyContent: 'center', maxWidth: 1170}}>
                <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 1, sm: 3}}>
                        {/*{gameList.games.slice(0, 3).map((item) =>*/}
                        {/*    // <Grid xs={1} sx={{ display: 'flex', justifyContent:"center"}}>*/}
                        {/*    //     <Link href={`browse/${item.data.id}`}><LargeCard key={item.data.id} data={item.data}/></Link>*/}
                        {/*    // </Grid>*/}
                        {/*)}*/}
                </Grid>
            </Box>
        </div>
    );
};

export default LargeCardContainer;