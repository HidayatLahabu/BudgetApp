import React from 'react';
import { Form, NavLink } from 'react-router-dom';

//assets
import logomark from "../assets/logomark.svg"

//icons
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';

const Nav = ({ userName }) => {
    return (
        <nav>
            <NavLink
                to="/"
                aria-label='Got to home'
            >
                <img src={logomark} alt="" height={30} />
                <span>Home</span>
            </NavLink>
            {
                userName && (
                    <Form
                        method='post'
                        action='/logout'
                        onSubmit={(event) => {
                            if (!confirm("Logout from Budget App?")) {
                                event.preventDefault()
                            }
                        }}
                    >
                        <button type='submit' className='btn btn--warning'>
                            <span>Logout</span>
                            <ArrowRightCircleIcon width={20} />
                        </button>
                    </Form>
                )
            }
        </nav>
    )
}

export default Nav