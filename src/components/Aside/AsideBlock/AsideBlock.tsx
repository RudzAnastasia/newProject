import React, {ReactNode} from 'react';

type AsideBlockPropType = {
    icon?: string
    title: string
    width: number
    height: number
    children: ReactNode
}

export const AsideBlock = ({icon, title, width, height, children}: AsideBlockPropType) => {
    return (
        <div style={{width, height}}>
            <div>
                { icon && <img src={icon} alt="icon"/>}
                <h3>{title}</h3>
            </div>
            {children}
        </div>
    );
};

