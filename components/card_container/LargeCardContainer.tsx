import React, {FC} from 'react';
import LargeCard from "../cards/LargeCard";
import {ICardProps} from "../../types/IGame";

const LargeCardContainer: FC<ICardProps> = (gameList) => {
    return (
        <div>
            <div className="large_cards">
                {/*{games.map((item) =>*/}
                {/*    <LargeCard variant="outlined" id={item.data.id} data={item.data} />*/}
                {/*)}*/}
                <LargeCard key={gameList.games[0].data.id} data={gameList.games[0].data}/>
                <LargeCard key={gameList.games[1].data.id} data={gameList.games[1].data}/>
                <LargeCard key={gameList.games[2].data.id} data={gameList.games[2].data}/>
            </div>
        </div>
    );
};

export default LargeCardContainer;