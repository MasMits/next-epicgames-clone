import {Inter} from '@next/font/google'
import Layout from "../components/Layout";
import MediumCardContainer from "../components/card_container/MediumCardContainer";
import LargeCardContainer from "../components/card_container/LargeCardContainer";
import {dataUpload} from "../hooks/dataUpload";
import {NextPageContext} from "next";
import {IGame} from "../types/IGame";

const inter = Inter({subsets: ['latin']})

export const getServerSideProps = async (ctx: NextPageContext) => {
    const response = await fetch('http://localhost:3000/api/games');
    const data = await response.json();
    return {props: {...data}};
}

const Home = () => {
    let games = dataUpload();

    return (
        <Layout>
            <main>
                <LargeCardContainer games={games}/>
                <MediumCardContainer games={games}/>
            </main>
        </Layout>
    )
}

export default Home;