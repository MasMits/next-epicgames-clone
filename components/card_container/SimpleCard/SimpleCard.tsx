import React, {FC} from 'react';
import Link from "next/link";
import MediumCard from "../../cards/MediumCard";
import {ICardProps} from "../../../types/IGame";
import styles from "./simplecard.module.scss"
const SimpleCard : FC<ICardProps> = (gameList) => {
    return (
        <div className={styles.flex}>
                {gameList.games.map((item) =>
                        <div className={styles.flexItem}><Link href={`browse/${item.data.id}`}><MediumCard key={item.data.id} data={item.data}/></Link></div>
                )}
        </div>
    );
};

export default SimpleCard;