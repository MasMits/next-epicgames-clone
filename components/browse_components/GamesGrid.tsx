import {IGame} from "../../types/IGame";
import MediumCard from "../../components/cards/MediumCard";
import Link from "next/link";
import React from "react";
import {Grid} from "@mui/material";

export interface ICardProps {
    games: { data: IGame[] },
    typeOfCompare: string,
    filter: string
}


const GamesGrid = (props: ICardProps) => {
    function myCompare(game_1: IGame, game_2: IGame): number {
        let a: any = null;
        let b: any = null;
        switch (props.typeOfCompare) {
            case 'Price: Low to High':
                a = game_1.data.price;
                b = game_2.data.price;
                break;
            case 'Price: High to Low':
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
    console.log(props.games.data[1])
    return (
        <>
            <Grid item xs={9} container spacing={2}>
                {props.games.data.sort(myCompare).map((item) =>
                    <Grid item xs={4}>
                        <Link href={`browse/${item.data.id}`}><MediumCard key={item.data.id}
                                                                          data={item.data}/></Link>
                    </Grid>
                )}
            </Grid>
        </>
    )
}

export default GamesGrid;
