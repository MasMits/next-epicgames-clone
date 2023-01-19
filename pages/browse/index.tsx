import Layout from "../../components/Layout";
import * as React from 'react';
import {Grid} from "@mui/material";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import SortZone from "../../components/browse_components/SortZone";
import GamesGrid from "../../components/browse_components/GamesGrid";
import {NextPageContext} from "next";
import {IGame} from "../../types/IGame";
import FilterZone from "../../components/browse_components/FilterZone";
import {useState} from "react";


export const getServerSideProps = async (ctx: NextPageContext) => {
    const response = await fetch(`http://localhost:3000/api/games`);
    const data = await response.json();
    return {props: {data: [...data]}};
}

export interface ICardProps {
    data: IGame[];
}


const Browse = (games: ICardProps) => {
    const [typeOfCompare, setTypeOfCompare] = useState('value2');

    return (
        <Layout>
            <Stack spacing={2}>
                <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={2} container spacing={2}>
                        <SortZone setTypeOfCompare={setTypeOfCompare}/>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <GamesGrid games={games} typeOfCompare={typeOfCompare} filter={' '}/>
                    <Grid item xs={3} container spacing={2}>
                        <FilterZone/>
                    </Grid>
                </Grid>
            </Stack>
            <Stack spacing={2}>
                <Pagination count={10}/>
            </Stack>
        </Layout>
    )
}

export default Browse;