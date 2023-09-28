import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BiSearchAlt2 } from 'react-icons/bi'
import { MdUploadFile } from 'react-icons/md'
import './Navbar.css'

const Navbar = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(search)
        if (!search) return;

        navigate(`/search?q=${search}`);
        setSearch('');
    }

    return (
        <nav id='navbar'>
            <h2>
                <Link to='/'><MdUploadFile />Upload CSV </Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Pesquise.."
                    onChange={(e) => setSearch(e.target.value)}
                    value={search} />
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    )
}

export default Navbar;