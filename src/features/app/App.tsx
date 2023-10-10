import React from 'react';
import './App.css';
import Header from "../../components/Header/Header";
import {Aside} from "../../components/Aside/Aside";
import {Route, Routes} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Header/>
            <div>
            {/*<Aside/>*/}54fff
             <Routes>
                 <Route path='/home'/>
                 <Route path='/favorite'/>
                 <Route path='/clock'/>
                 <Route path='/movie'/>
             </Routes>
            </div>
        </div>
    );
}

export default App;
