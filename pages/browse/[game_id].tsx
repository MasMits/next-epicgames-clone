import Layout from "../../components/Layout";
import {IGame} from "../../types/IGame";
import {NextPageContext} from "next";
import {notFind} from '../api/data/notFind'
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import Button from "@mui/material/Button";
import Comments from "../../components/game_page/Comments/Comments";
import Stack from "@mui/material/Stack";
import ImageSlider from "../../components/game_page/ImageSlider";
import Box from "@mui/material/Box";
import ImgGrid from "../../components/game_page/IMGGrid/IMGGrid";
import BackToTopButton from "../../components/game_page/BackToTopButton/BackToTopButton";
import SmallComments from "../../components/game_page/SmallComments/SmallComments";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material/styles";


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
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const matches2 = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Layout>
            <Grid container spacing={2}    direction="row-reverse"
                  justifyContent="space-between" width='100%' columns={{xs: 1, sm: 1, md:12}}>
                <Grid xs={3} >
                    <Box >
                        <Stack spacing={2}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/22/Red_Dead_Redemption_2_Logo.png" alt=""/>
                            <Typography variant="h5" gutterBottom> UAH {game.data.price} </Typography>
                            <Button variant="contained">BUY NOW</Button>
                            <Button variant="outlined">ADD TO CART</Button>
                            <Button variant="outlined">+ ADD TO WISHLIST</Button>
                        </Stack>
                    </Box>
                </Grid>

                <Grid xs={9} sx={{padding: matches ? 0 : 8}}>
                    <div>
                        <Typography variant="h3" gutterBottom> {game.data.game_name} </Typography>
                        <ImageSlider/>
                        <Typography variant="h6" gutterBottom> Lorem ipsum dolor sit amet </Typography>
                        <Typography variant="body1" gutterBottom >
                            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.

                            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.
                            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.
                            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.
                        </Typography>
                        <ImgGrid/>
                        <Typography variant="body1" gutterBottom>
                            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.

                        </Typography>

                    </div>
                </Grid>

            </Grid>
            <Stack direction="row" spacing={2}>
                {!matches && <Comments/>}
                <Comments/>
                {!matches && <Comments/>}
            </Stack>
            {matches && !matches2 && <Stack direction="row" spacing={2} margin={2}>
                <SmallComments/>
                <SmallComments/>
            </Stack>}
            {matches2 && <Stack direction="column" spacing={2} margin={2} >
                <SmallComments/>
                <SmallComments/>
            </Stack>}

            <BackToTopButton/>
        </Layout>)
}

export default Game;

