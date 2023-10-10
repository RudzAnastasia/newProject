import React from 'react';
import {AsideBlock} from "./AsideBlock/AsideBlock";
import {CardsWatching} from "../../features/MovieCards/CardsWatching/CardsWatching";
import {ListContinuePlaying} from "../../features/MovieCards/ListContinuePlaying/ListContinuePlaying";

const watchingMovie = [
    {id: 1, title: "Lorem ipsum tratata", background: "https://img.freepik.com/free-vector/hand-drawn-movie-premiere-sale-banner_23-2149481542.jpg"},
    {id: 2, title: "Lorem ipsum tratata", background: "https://img.freepik.com/free-vector/hand-drawn-movie-premiere-sale-banner_23-2149481542.jpg"},
    {id: 3, title: "Lorem ipsum tratata", background: "https://img.freepik.com/free-vector/hand-drawn-movie-premiere-sale-banner_23-2149481542.jpg"},
]

const continuePlaying = [
    {id: 1, title: "Lorem ipsum tratata", cover: "https://bipbap.ru/wp-content/uploads/2019/05/1532440298_3.jpg", episode: 1},
    {id: 2, title: "Lorem ipsum tratata", cover: "https://bipbap.ru/wp-content/uploads/2019/05/1532440298_3.jpg", episode: 10},
    {id: 3, title: "Lorem ipsum tratata", cover: "https://bipbap.ru/wp-content/uploads/2019/05/1532440298_3.jpg", episode: 20},
    {id: 4, title: "Lorem ipsum tratata", cover: "https://bipbap.ru/wp-content/uploads/2019/05/1532440298_3.jpg", episode: 5},
    {id: 5, title: "Lorem ipsum tratata", cover: "https://bipbap.ru/wp-content/uploads/2019/05/1532440298_3.jpg", episode: 3},
]



export const Aside = () => {
    return (
        <div>
            <AsideBlock icon='icon'
                        title='Most Watching'
                        width={360}
                        height={500}>
                {watchingMovie.map(m => <CardsWatching key={m.id} background={m.background} title={m.title}/>)}
            </AsideBlock>

            <AsideBlock title='Continue Playing'
                        width={358}
                        height={398}>
                <ul>
                    {continuePlaying.map(m => <li key={m.id}><ListContinuePlaying cover={m.cover} title={m.title} episode={m.episode}/></li>)}
                </ul>
            </AsideBlock>
        </div>
    );
};
