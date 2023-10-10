import React from 'react';
import {PlayCircleOutlined} from "@ant-design/icons";

type CardsWatchingPropType = {
    background: string
    title: string
}

export const CardsWatching = ({background, title}: CardsWatchingPropType) => {
    return (
        <div>
            <img src={background} alt="coverMovie"/>
            <div>
                <span>{title}</span>
                <PlayCircleOutlined />
            </div>
        </div>
    );
};
