import Layout from "../../components/Layout";
import * as React from 'react';
import {Drawer} from "@mui/material";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import SortZone from "../../components/browse_components/SortZone";
import GamesGrid from "../../components/browse_components/GamesGrid";
import {NextPageContext} from "next";
import {IGame} from "../../types/IGame";
import FilterZone from "../../components/browse_components/FilterZone";
import {useEffect, useState} from "react";
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";


export const getServerSideProps = async (ctx: NextPageContext) => {
    try {
        const response = await fetch(`${process.env.API_HOST}/games?page=4&limit=2`);
        const data = await response.json();
        return {props: {data: [...data]}};
    } catch {
        return {props: {data: []}};
    }
}

export interface ICardProps {
    data: IGame[];
}


const Browse = (games: ICardProps) => {
    const [typeOfCompare, setTypeOfCompare] = useState('Alphabetical');
    const [price, setPrice] = useState<number[]>([0, 5000]);
    const [genres, setGenres] = useState<string[]>(['Action']);
    const [searchTitle, setSearchTitle] = useState('');
    const [page, setPage] = useState(1);
    const [finalGames, setFinalGames] = useState<IGame[]>(games.data);
    const [countPages, setCountPages] = useState<number>(1);

    const pageHandleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    useEffect(  () => {
        fetchGames();
    },[page, price, genres, typeOfCompare, searchTitle] )

    async function fetchGames() {
        try {
            console.log(`(${genres.map((el) => 'genres=' + el).join('&')})`);
            const response = await fetch(`api/games?
            typeOfCompare=${typeOfCompare}
            &${genres.map((el) => 'genres=' + el).join('&')}&page=${page}&limit=6
            &price1=${price[0]}&price2=${price[1]}
            &searchTitle=${searchTitle}
            `);
            // ${genres.map((el) => 'genres=' + el).join('&')}`);
            const data = await response.json();
            setCountPages(data.pages);
            console.log('countPages ' + countPages)
            setFinalGames( [...data.games]);
        } catch {
            console.log('Sorry we have problem')
            // setFinalGames( []);
        }
    }

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const [openFilterWindow, setOpenFilterWindow] = useState(false);

    return (
        <Layout>
            <Stack spacing={2}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    spacing={2}
                >
                    <SortZone setTypeOfCompare={setTypeOfCompare}/>
                    {matches && <Button onClick={() => {
                        setOpenFilterWindow(true)
                    }}>Filters</Button>}
                    <Drawer
                        anchor={'right'}
                        open={openFilterWindow}
                        onClose={() => {
                            setOpenFilterWindow(false)
                        }}
                    >
                        {
                            <Box padding={2}>
                                <FilterZone setValue={setPrice} value={price} genres={genres} setGenres={setGenres}
                                            setSearchTitle={setSearchTitle}/>
                            </Box>
                        }
                    </Drawer>

                </Stack>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    spacing={2}
                >
                    <GamesGrid games={finalGames} typeOfCompare={typeOfCompare} price={price} genres={genres}
                               searchTitle={searchTitle}/>
                    {!matches &&
                        <FilterZone setValue={setPrice} value={price} genres={genres} setGenres={setGenres}
                                    setSearchTitle={setSearchTitle}/>
                    }
                </Stack>
            </Stack>
            <Stack spacing={2}>
                <Pagination count={countPages} page={page} onChange={pageHandleChange}/>
            </Stack>
        </Layout>
    )
}

export default Browse;