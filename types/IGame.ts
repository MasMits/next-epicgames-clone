export interface IGame {
    data: {
        id: number,
        type: string,
        price: number,
        game_name: string,
        short_description: string,
        header_image: string,
        website: string,
    }
}


export interface ICardProps{
    games: IGame[]
}