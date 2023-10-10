import React from 'react';
import {HomeOutlined, HeartOutlined, ClockCircleOutlined, ProfileOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";

export const Navigation = () => {
    return (
        <div>
            <NavLink to='/home-page'><HomeOutlined /></NavLink>
            <NavLink to='/favorite'><HeartOutlined /></NavLink>
            <NavLink to='/time'><ClockCircleOutlined /></NavLink>
            <NavLink to='/movie'><ProfileOutlined /></NavLink>
        </div>
    );
};

