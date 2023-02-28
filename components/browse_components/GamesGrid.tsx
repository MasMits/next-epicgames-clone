import {IGame} from "../../types/IGame";
import MediumCard from "../../components/cards/MediumCard";
import Link from "next/link";
import React from "react";
// import {Grid} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2


export interface ICardProps {
    games: IGame[],
    typeOfCompare: string,
    price: number[],
    genres: string[],
    searchTitle: string
}


const GamesGrid = (props: ICardProps) => {
    return (
        <Grid container spacing={{ xs: 1, sm: 1, md: 3 }} columns={{xs: 1, sm: 2, md:3, xl:4}}>
            {props.games.map((item) =>
                <Grid xs={1} sx={{ display: 'flex', justifyContent:"center"}} key={item.data.id} >
                    <Link href={`browse/${item.data.id}`}><MediumCard data={item.data}/></Link>
                </Grid>
            )}
        </Grid>
    )
}

export default GamesGrid;
