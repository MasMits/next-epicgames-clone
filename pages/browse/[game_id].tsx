import Layout from "../../components/Layout";
import {IGame} from "../../types/IGame";
import {NextPageContext} from "next";
import MediumCard from "../../components/cards/MediumCard";

export const getServerSideProps = async (ctx: NextPageContext) => {
    const response = await fetch(`http://localhost:3000/api/games/${ctx.query.game_id}`);
    const data = await response.json();
    return {props: {...data}};
}

const Game = (game : IGame) => {
    console.log(game.data.game_name)
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