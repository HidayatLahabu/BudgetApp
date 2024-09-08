import React from 'react';
import { useLoaderData } from 'react-router-dom';

// helper function
import { fetchData } from '../helpers';

//component
import Intro from '../components/Intro';

//library
import { toast } from 'react-toastify';

//action
export async function dashboardAction({ request }) {
    const data = await request.formData();
    const formData = Object.fromEntries(data)
    try {
        localStorage.setItem("userName", JSON.stringify(formData.userName))
        return toast.success(`Welcome, ${formData.userName}`)
    } catch (e) {
        throw new Error("There is a problem to create your account");
    }

}

export function dashboardLoader() {
    const userName = fetchData("userName");
    return { userName }
}

const Dashboard = () => {
    const { userName } = useLoaderData()

    return (
        <>
            {userName ? (<p>{userName}</p>) : <Intro />}
        </>
    )
}

export default Dashboard