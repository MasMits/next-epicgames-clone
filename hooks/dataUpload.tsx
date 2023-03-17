import {IGame} from "../types/IGame";

export function dataUpload(): IGame[] {
    let games: IGame[] = [
        {
            data: {
                id: 0,
                type: "game",
                price: 1999,
                genre: ['Action', 'Action-Adventure', 'Adventure', 'Card-Game', 'Casual'],
                game_name: "God of War Рагнарёк",
                short_description: "Вооружившись верным оружием, в том числе топором Левиафан и клинками Хаоса, Кратос предстанет перед самым смертоносным испытанием, стремясь защитить свою семью. Вместе с Атреем они обрели множество новых способностей, поэтому эта героическая история будет полна зрелищных сражений.",
                header_image: "https://image.api.playstation.com/pr/bam-art/144/016/5597f0f6-0acf-4628-b931-592bb42065f6.jpg?w=620&thumb=false",
                website: "http://www.teamfortress.com/",
            }
        },
        {
            data: {
                id: 1,
                type: "game",
                price: 1999,
                genre: ['Action', 'Adventure'],
                game_name: "Хогвартс. Наследие",
                short_description: "«Хогвартс. Наследие» – это ролевая игра с открытым миром, который известен вам по книгам о Гарри Поттере. Отправляйтесь в путешествие, находите фантастических тварей, меняйте своего персонажа, варите зелья, изучайте заклинания, развивайте таланты, чтобы стать настоящим волшебником.",
                header_image: "https://image.api.playstation.com/vulcan/ap/rnd/202011/0919/JmxLZt6exeqcKRz7BSmK8aId.png?w=440&thumb=false",
                website: "http://www.teamfortress.com/",
            }
        },
        {
            data: {
                id: 2,
                type: "game",
                price: 999,
                genre: ['Adventure'],
                game_name: "TUNIC",
                short_description: "Исследуй земли, полные легенд, древних сил и яростных монстров. В изометрическом экшене TUNIC тебе предстоит большое путешествие в роли маленького лисенка. Ты просыпаешься среди руин, и все, что у тебя есть, — это любопытство. Сражайся с чудовищами, собирай волшебные предметы и раскрывай древние тайны.\n",
                header_image: "https://image.api.playstation.com/vulcan/ap/rnd/202206/0301/KSalsBYWb0IuDrdD1SbptAd6.png?w=440&thumb=false",
                website: "http://www.teamfortress.com/",
            }
        },
        {
            data: {
                id: 3,
                type: "game",
                price: 1399,
                genre: ['Adventure'],
                game_name: "It Takes Two",
                short_description: "Исследуй земли, полные легенд, древних сил и яростных монстров. В изометрическом экшене TUNIC тебе предстоит большое путешествие в роли маленького лисенка. Ты просыпаешься среди руин, и все, что у тебя есть, — это любопытство. Сражайся с чудовищами, собирай волшебные предметы и раскрывай древние тайны.\n",
                header_image: "https://gmedia.playstation.com/is/image/SIEPDC/it-takes-two-store-art-01-ps4-ps5-en-29jan21?$1200px$",
                website: "http://www.teamfortress.com/",
            }
        },
        {
            data: {
                id: 4,
                type: "game",
                price: 2999,
                genre: ['Adventure'],
                game_name: "STAR WARS Jedi: Survivor™",
                short_description: "\n" +
                    "История Кэла Кестиса продолжается в игре STAR WARS Jedi: Survivor™ — приключенческом экшне галактического масштаба с видом от третьего лица, созданном Respawn Entertainment и Lucasfilm Games. Действие этой сюжетной одиночной игры разворачивается спустя пять лет после событий «ЗВЁЗДНЫЕ ВОЙНЫ Джедаи: Павший Орден™». В отчаянной схватке Кэл должен защитить галактику от надвигающейся тьмы.",
                header_image: "https://image.api.playstation.com/vulcan/ap/rnd/202211/2222/l8QTN7ThQK3lRBHhB3nX1s7h.png?w=440&thumb=false",
                website: "http://www.teamfortress.com/",
            }
        },
        {
            data: {
                id: 5,
                type: "game",
                price: 2999,
                genre: ['Action'],
                game_name: "Ghostrunner",
                short_description: "\n" +
                    "Поднимайтесь вверх по башне Дхарма — последнему приюту человечества после всемирной катастрофы.Проделайте путь от низу до вершины, встретьтесь с тираном Кимастером и отомстите ему за все. Улицы этого города-башни охвачены насилием.",
                header_image: "https://image.api.playstation.com/vulcan/ap/rnd/202108/2600/hdoOAnRlmDSm5kCcgggrXnIT.png?w=440&thumb=false",
                website: "http://www.teamfortress.com/",
            }
        },
        {
            data: {
                id: 6,
                type: "game",
                price: 1429,
                genre: ['Action', 'Adventure'],
                game_name: "Ratchet & Clank: Сквозь миры",
                short_description: "Рэтчет и Кланк возвращаются! Помогите им остановить роботизированного императора, мечтающего о покорении всех множественных измерений, потому что на очереди их родное измерение. Лучшая команда на свете становится еще сильнее, ведь к ней примкнула Ривет – боец сопротивления ломбаксов из другого измерения.",
                header_image: "https://image.api.playstation.com/vulcan/ap/rnd/202101/2921/7jKlwpL8qVTmx1D13nHH0e0I.png?w=440&thumb=false",
                website: "http://www.teamfortress.com/",
            }
        }
    ];
    return games;
}