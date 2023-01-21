import {IGame} from "../../types/IGame";
import MediumCard from "../../components/cards/MediumCard";
import Link from "next/link";
import React from "react";
import {Grid} from "@mui/material";

export interface ICardProps {
    games: { data: IGame[] },
    typeOfCompare: string,
    price: number[],
    genres: string[],
    searchTitle: string
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

    function gameFilter(value: IGame): boolean {
        if (value.data.price < Math.min(...props.price) || value.data.price > Math.max(...props.price)) {
            return false;
        }
        for (let i = 0; i < props.genres.length; i++) {
            if (!value.data.genre.includes(props.genres[i])) {
                console.log("work");
                return false;
            }
        }
        return value.data.game_name.toLowerCase().includes(props.searchTitle.toLowerCase());
    }

    return (
        <>
            {props.games.data.filter(gameFilter).sort(myCompare).map((item) =>
                <Grid item xs={4} key={item.data.id}>
                    <Link href={`browse/${item.data.id}`}><MediumCard data={item.data}/></Link>
                </Grid>
            )}
        </>
    )
}

export default GamesGrid;
