export interface IGame {
    data: {
        id: number,
        type: string,
        game_name: string,
        short_description: string,
        header_image: string,
        website: string,
    }
}


export interface ICardProps{
    games: IGame[]
}