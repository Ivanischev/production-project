import React, {Suspense} from 'react';
import './styles/index.scss';
import {Route, Routes, Link} from "react-router-dom";
import {useTheme} from "./providers/ThemeProvider";
import {classNames} from "../shared/lib/classNames/classNames";
import {AppRouter} from "./providers/router";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <AppRouter/>
        </div>
    );

};

export default App;
