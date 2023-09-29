import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import UserDetails from "./UserDetails";

const searchURL = import.meta.env.VITE_SEARCH

const Details = () => {
    const [searchParams] = useSearchParams()

    const [users, setUsers] = useState([])
    const query = searchParams.get("id")

    const getSearchedUsers = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setUsers(data)
    }
    useEffect(() => {
        const searchWithQueryURL = `${searchURL}=${query}`;
        getSearchedUsers(searchWithQueryURL)
    }, [query])

    return (
        <div >
            {users.length === 0 && <p>Carregando...</p>}
            {users.length > 0 && users.map((user) => <UserDetails key={user.id} user={user} />)}
        </div>
    )
}

export default Details;
