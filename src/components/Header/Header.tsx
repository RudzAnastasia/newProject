import React from 'react';
import {Input} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import {Navigation} from "../Navigation/Navigation";
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.headerNav}>
                <Input
                    size='large'
                    className='inputAntD'
                    placeholder="Type here to search"
                    prefix={<SearchOutlined/>}/>
                <Navigation/>
                <div>lallalal</div>
            </div>
        </header>
    );
};

export default Header;