import React from "react";
import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';

function MainNavigation()
{

    return(
        <header className={classes.header}>
            <div className={classes.logo}>CodingPrep</div>
            <nav>
                <ul>
                    <li><Link to="/" exact>Home</Link></li>
                    <li><Link to="/week1">Module 1</Link></li>
                    <li><Link to="/week2">Module 2</Link></li>
                    <li><Link to="/week3">Module 3</Link></li>
                    <li><Link to="/week4">Module 4</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;