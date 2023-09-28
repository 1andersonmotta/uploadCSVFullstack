import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import UserCard from "../components/UserCard";
import './MoviesGrid.css';

const searchURL = import.meta.env.VITE_SEARCH

const Search = () => {
    const [searchParams] = useSearchParams()

    const [users, setUsers] = useState([])
    const query = searchParams.get("q")

    const getSearchedUsers = async (url) => {
        console.log('url', url)
        const res = await fetch(url);
        const data = await res.json();
        console.log('data', data)
        setUsers(data)
    }

    useEffect(() => {
        const searchWithQueryURL = `${searchURL}=${query}`;
        console.log('query', searchWithQueryURL)

        getSearchedUsers(searchWithQueryURL)
    }, [query])

    return (
        <div className="container">
            <h2 className="title">
                Resultados para: <span className="query-text">{query}</span>
            </h2>
            <div className="movies-container">
                {users.length === 0 && <p>Carregando...</p>}
                {users.length > 0 && users.map((user) => <UserCard key={user.id} user={user} />)}
            </div>
        </div>
    )
}

export default Search;