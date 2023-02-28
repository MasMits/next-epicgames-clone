import Layout from "../../components/Layout";
import {IGame} from "../../types/IGame";
import {NextPageContext} from "next";
import MediumCard from "../../components/cards/MediumCard";
import {notFind} from '../api/data/notFind'
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import Button from "@mui/material/Button";
import Comments from "../../components/game_page/Comments";
import Stack from "@mui/material/Stack";

export const getServerSideProps = async (ctx: NextPageContext) => {
    try {
        const response = await fetch(`${process.env.API_HOST}/games/${ctx.query.game_id}`);
        const data = await response.json();
        return {props: {...data}};
    } catch {
        return {props: {notFind}};
    }
}

const Game = (game: IGame) => {
    console.log(game)
    return (
        <Layout>
            <Grid container spacing={2} justifyContent="space-between" width='100%'>
                <Grid xs={9}>
                    <div>
                        <Typography variant="h3" gutterBottom> {game.data.game_name} </Typography>
                        <MediumCard data={game.data}/>
                        <Typography variant="h6" gutterBottom> Lorem ipsum dolor sit amet </Typography>
                        <Typography variant="body1" gutterBottom>
                            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.
                        </Typography>

                        <Stack direction="row" spacing={2}>
                            <Comments/>
                            <Comments/>
                            <Comments/>
                        </Stack>

                    </div>
                </Grid>
                <Grid xs={3}>
                    <Typography variant="h5" gutterBottom> UAH {game.data.price} </Typography>
                    <Stack spacing={2}>
                        <Button variant="contained">BUY NOW</Button>
                        <Button variant="outlined">ADD TO CART</Button>
                        <Button variant="outlined">+ ADD TO WISHLIST</Button>
                    </Stack>

                </Grid>
            </Grid>

        </Layout>)
}

export default Game;

