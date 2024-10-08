import { redirect } from "react-router-dom";

//helpers
import { deleteItem } from "../helpers";

//library
import { toast } from "react-toastify";

export async function logoutAction() {
    //delete user
    deleteItem({
        key: "userName"
    })
    toast.success("Logout success!")

    //return redirect
    return redirect("/")
}