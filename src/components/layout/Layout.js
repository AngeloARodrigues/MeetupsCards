import classes from './Layout.module.css';

import React from 'react';
import MainNavgation from './MainNavgation';

function Layout(props) {
    return (
        <div>
            <MainNavgation />
            <main className={classes.main}>
                {props.children}
            </main>
        </div>
    )
}

export default Layout;