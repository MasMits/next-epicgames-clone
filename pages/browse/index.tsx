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
import {useState} from "react";
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";


export const getServerSideProps = async (ctx: NextPageContext) => {
    try {
        const response = await fetch(`${process.env.API_HOST}/games`);
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
    const [typeOfCompare, setTypeOfCompare] = useState('value2');
    const [value, setValue] = useState<number[]>([0, 5000]);
    const [genres, setGenres] = React.useState<string[]>([]);
    const [searchTitle, setSearchTitle] = useState('');
    ///
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
                        onOpen={() => {
                            setOpenFilterWindow(true)
                        }}
                    >
                        {
                            <Box padding={2}>
                                <FilterZone setValue={setValue} value={value} genres={genres} setGenres={setGenres}
                                            setSearchTitle={setSearchTitle}/>
                            </Box>
                        }
                    </Drawer>

                </Stack>
                {/*<Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>*/}
                {/*    <Grid item xs={2} container spacing={2}>*/}
                {/*        <SortZone setTypeOfCompare={setTypeOfCompare}/>*/}
                {/*    </Grid>*/}
                {/*</Grid>*/}
                {/*<Grid container spacing={2}>*/}
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    spacing={2}
                >
                    {/*<Grid item xs={9} container spacing={2}>*/}
                    <GamesGrid games={games} typeOfCompare={typeOfCompare} price={value} genres={genres}
                               searchTitle={searchTitle}/>
                    {/*</Grid>*/}
                    {!matches &&
                        // <Grid item xs={3} container spacing={2}>
                        <FilterZone setValue={setValue} value={value} genres={genres} setGenres={setGenres}
                                    setSearchTitle={setSearchTitle}/>
                        // </Grid>
                    }
                </Stack>

                {/*</Grid>*/}
            </Stack>
            {/*<Stack spacing={2}>*/}
            {/*    <Pagination count={10}/>*/}
            {/*</Stack>*/}
        </Layout>
    )
}

export default Browse;