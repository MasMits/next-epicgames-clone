import React, {FC} from 'react';
import {ICardProps} from "../../types/IGame";
import Typography from '@mui/material/Typography';
import {Box} from "@mui/material";
import MediumCard from "../cards/MediumCard";
import Fab from '@mui/material/Fab';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Link from "next/link";

const MediumCardContainer: FC<ICardProps> = (gamesList) => {
    return (
    <div className="MediumCardContainer">
            <Box className="header" sx={{ display: 'flex', justifyContent: 'space-between', width:1170}}>
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
            <div className="medium_cards">
                {gamesList.games.map((item) =>
                    <Link  key={item.data.id} href={`browse/${item.data.id}`}><MediumCard data={item.data}/></Link>
                )}
            </div>
        </div>
    );
}

export default MediumCardContainer;