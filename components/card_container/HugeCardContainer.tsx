import React, {FC} from 'react';
import HugeCard from "../cards/HugeCard";
import SmallCard from "../cards/SmallCard";
import {ICardProps} from "../../types/IGame";
import Link from "next/link";

const HugeCardContainer: FC<ICardProps> = (gameList) => {
    return (
        <div className="HugeCardContainer">
            <div className=""><HugeCard /*variant="outlined"*/ key={gameList.games[0].data.id} data={gameList.games[0].data}/></div>
            <div>
                <div className="smallCard_container">
                    <div className="SmallCardContainer">
                        {/*{gameList.games.map((item) =>*/}
                        {/*    <Link href={`browse/${item.data.id}`}> <SmallCard key={item.data.id} data={item.data}/></Link>*/}
                        {/*)}*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HugeCardContainer;