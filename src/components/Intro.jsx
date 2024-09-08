import React from 'react';
import { Form } from 'react-router-dom';

//icons
import { UserPlusIcon } from '@heroicons/react/24/solid';

//assets
import illustration from "../assets/budget.jpg";

const Intro = () => {
    return (
        <div className='intro'>
            <div>
                <h1>
                    Take control of <span className='accent'>Your Money</span>
                </h1>
                <p>
                    Plan smarter, spend wiser, and feel the freedom of financial security. Start your budget journey today!
                </p>
                <Form method='post'>
                    <input
                        type="text"
                        name='userName'
                        required
                        placeholder='Enter your name!'
                        aria-label='Your Name'
                        autoComplete='given-name'
                    />
                    <button
                        type='submit'
                        className='btn btn--dark'>
                        <span>Create Account</span>
                        <UserPlusIcon width={20} />
                    </button>
                </Form>
            </div>
            <img
                src={illustration}
                alt="Person with money"
                width={600}
            />
        </div>
    )
}

export default Intro