import { Link } from 'react-router-dom';

import classes from './MainNavgation.module.css';

function MainNavgation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li><Link to='/'>All Meetups</Link></li>
                    <li><Link to='/new-meetups'>New Meetups</Link></li>
                    <li><Link to='/favorites'>Favorites</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavgation
