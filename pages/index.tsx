import {Inter} from '@next/font/google'
import Layout from "../components/Layout";
import MediumCardContainer from "../components/card_container/MediumCardContainer";
import LargeCardContainer from "../components/card_container/LargeCardContainer";
import {dataUpload} from "../hooks/dataUpload";
import {NextPageContext} from "next";
import {IGame} from "../types/IGame";
// import SmallCardContainer from "../components/card_container/SmallCardContainer";
import HugeCardContainer from "../components/card_container/HugeCardContainer";
import SimpleCard from "../components/card_container/SimpleCard/SimpleCard";

const inter = Inter({subsets: ['latin']})

// export const getServerSideProps = async (ctx: NextPageContext) => {
//     const response = await fetch('http://localhost:3000/api/games');
//     const data = await response.json();
//     return {props: {...data}};
// }

export interface ICardProps {
    data: IGame[];
}

const Home = () => {
// const Home = (games: ICardProps) => {
    let games = dataUpload();

    return (
        <Layout>
            <main>
                {/*<HugeCardContainer games={games}/>*/}
                {/*<LargeCardContainer games={games}/>*/}
                {/*<MediumCardContainer games={games}/>*/}
                <SimpleCard games={games}/>
                {/*<SmallCardContainer games={games}/>*/}
            </main>
        </Layout>
    )
}

export default Home;