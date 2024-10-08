import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';

// helper function
import { fetchData } from '../helpers';

// assets
import wave from "../assets/wave.svg";

//component
import Nav from '../components/Nav';

export function mainLoader() {
    const userName = fetchData("userName");
    return { userName }
}

const Main = () => {
    const { userName } = useLoaderData()

    return (
        <div className='layout'>
            <Nav userName={userName} />
            <main>
                <Outlet />
            </main>
            <img src={wave} alt="" />
        </div>
    )
}

export default Main