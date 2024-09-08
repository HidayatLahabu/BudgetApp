//local storage
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

//logout
export const deleteItem = ({ key }) => {
    return localStorage.removeItem(key)
}