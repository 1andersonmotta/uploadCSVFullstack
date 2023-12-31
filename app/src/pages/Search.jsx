import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import UserCard from "../components/UserCard";
import './UserGrid.css';
import ErrorPage from "./ErrorPage";

const searchURL = import.meta.env.VITE_SEARCH

const Search = () => {
    const [searchParams] = useSearchParams()

    const [users, setUsers] = useState([])
    const query = searchParams.get("q")

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
        <div className="container">
            <h2 className="title">
                Resultados para : <span className="query-text">{query}</span>
            </h2>
            <div className="user-container">
                {users.length === 0 && <p>Carregando...</p>}
                {users.length > 0 ? users.map((user) => <UserCard key={user.id} user={user} />) : <ErrorPage />}
            </div>
        </div>
    )
}

export default Search;