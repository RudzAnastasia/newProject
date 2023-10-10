import React from 'react';
import {PlayCircleOutlined} from "@ant-design/icons";

type ListContinuePlayingPropType = {
    cover: string
    title: string
    episode: string | number
}

export const ListContinuePlaying = ({cover, episode, title}: ListContinuePlayingPropType) => {
    return (
        <div>
            <img src={cover} alt="movie"/>
            <div>
                <div>{title}</div>
                <span>{episode}</span>
            </div>
            <PlayCircleOutlined />
        </div>
    );
};
