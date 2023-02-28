// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {games} from '../data/games'
import {IGame} from "../../../types/IGame";

interface IResponse {
    games: IGame[],
    pages: number
}


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<IResponse>
) {
    const query = req.query;
    const {page, limit, typeOfCompare, searchTitle, price1, price2, genres} = query;
    const start = (Number(page) - 1) * Number(limit);
    const end = start + Number(limit);


    function myCompare(game_1: IGame, game_2: IGame): number {
        let a: any = null;
        let b: any = null;

        switch (typeOfCompare) {
            case 'Low_to_High':
                a = game_1.data.price;
                b = game_2.data.price;
                break;
            case 'High_to_Low':
                a = game_2.data.price;
                b = game_1.data.price;
                break;
            case 'Alphabetical':
                a = game_1.data.game_name;
                b = game_2.data.game_name;
                break;
            default:
                break;
        }
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    }

    function gameFilter(value: IGame): boolean {
        if (value.data.price < Math.min(Number(price1), Number(price2)) || value.data.price > Math.max(Number(price1), Number(price2))) {
            return false;
        }
        if(genres !== undefined) {
            if (typeof(genres) === 'string') {
                if (!value.data.genre.includes(genres)) {
                    return false;
                }
            }else {
                for (let i = 0; i < genres.length; i++) {
                    if (!value.data.genre.includes(genres[i])) {
                        return false;
                    }
                }
            }
        }
        return value.data.game_name.toLowerCase().includes(typeof (searchTitle) === "string" ? searchTitle.toLowerCase() : '');
    }

    const finalGames = games.filter(gameFilter).sort(myCompare);
    const response: IResponse = {
        games: finalGames.slice(start, end),
        pages: Math.ceil(finalGames.length / Number(limit))
    }
    res.status(200).json(response)
}
