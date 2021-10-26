import classes from './MeetupList.module.css';

import React from 'react'
import MeetuoItem from './MeetuoItem';

function MeetupLinst(props) {
    return (
        <ul className={classes.list}>
            {props.items.map((items) =>
                <MeetuoItem
                    key={items.id}
                    id={items.id}
                    image={items.image}
                    title={items.title}
                    address={items.address}
                    description={items.description}
                />)}
        </ul>
    )
}

export default MeetupLinst
