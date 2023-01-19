import type { NextApiRequest, NextApiResponse } from 'next'
import {games} from '../data/games'
import {IGame} from "../../../types/IGame";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<IGame>
) {
    const id  = Number(req.query.id);
    res.status(200).json(games[id]);
}