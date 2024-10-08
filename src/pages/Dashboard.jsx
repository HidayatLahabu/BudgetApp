import React from 'react';
import { useLoaderData } from 'react-router-dom';

// helper function
import { createBudget, fetchData } from '../helpers';

//component
import Intro from '../components/Intro';
import AddBudgetForm from '../components/AddBudgetForm';

//library
import { toast } from 'react-toastify';

export function dashboardLoader() {
    const userName = fetchData("userName");
    const budgets = fetchData("budgets");
    return { userName, budgets }
}

//action
export async function dashboardAction({ request }) {
    const data = await request.formData();
    const { _action, ...values } = Object.fromEntries(data)
    if (_action === "newUser") {
        try {
            localStorage.setItem("userName", JSON.stringify(values.userName))
            return toast.success(`Welcome, ${values.userName}`)
        } catch (e) {
            throw new Error("There is a problem to create your account.");
        }
    }

    if (_action === "createBudget") {
        try {
            createBudget({
                name: values.newBudget,
                amount: values.newBudgetAmount,
            })
            return toast.success(`Budget Create!`)
        } catch (e) {
            throw new Error("There is a problem to create your budget.");
        }
    }
}

const Dashboard = () => {
    const { userName, budgets } = useLoaderData()

    return (
        <>
            {userName ? (
                <div className='dashboard'>
                    <h1>Welcome back, <span className="accent">{userName}</span></h1>
                    <div className='grid-sm'>
                        {/* {budgets ? (): ()} */}
                        <div className='grid-lg'>
                            <div className='flex-lg'>
                                <AddBudgetForm />
                            </div>
                        </div>
                    </div>
                </div>
            ) : <Intro />}
        </>
    )
}

export default Dashboard