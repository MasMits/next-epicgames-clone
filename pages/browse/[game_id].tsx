import Layout from "../../components/Layout";
import {IGame} from "../../types/IGame";
import {NextPageContext} from "next";
import MediumCard from "../../components/cards/MediumCard";
import {notFind} from '../api/data/notFind'
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
            <MediumCard data={game.data}/>
        </Layout>)
}

export default Game;

// Game.getInitialProps = async (ctx: NextPageContext) => {
//     const id = ctx.query;
//     console.log(id)
//     const games:IGame[] = dataUpload();
//     // const this_game = {...games[id]};
//     // console.log(this_game)
//     return {props: {id}};
//     // return {props: {games}};
// }