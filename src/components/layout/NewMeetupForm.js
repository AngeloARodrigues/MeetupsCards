import React from 'react'
import Card from './../ui/Card';

import classes from './NewMeetupForm.module.css';

function NewMeetupForm() {
    return (
        <Card>
            <form className={classes.form}>
                <div className={classes.crontrol}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' required id='title' />
                </div>
                <div className={classes.crontrol}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' required id='image' />
                </div>
                <div className={classes.crontrol}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' required id='address' />
                </div>
                <div className={classes.crontrol}>
                    <label htmlFor='description'>Description</label>
                    <textarea id="description" rows="5" required></textarea>
                </div>
                <div className={classes.action}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm
