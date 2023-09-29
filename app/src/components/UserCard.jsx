/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import '../pages/UserDetails.css'


const UserCard = ({ user, showLink = true }) => {
    const { id, name, city, country, favorite_sport } = user

    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log(id)
        if (!id) return;

        navigate(`/user?id=${id}`);
    }
    return (
        <div className="user-card">
            <h2 style={{ fontSize: "1rem" }}>Nome: {name}</h2>
            <h2 style={{ fontSize: "1rem" }}>País: {country}</h2>
            <h2 style={{ fontSize: "1rem" }}>Cidade: {city}</h2>
            <p>
                Esporte Favorito: {favorite_sport}
            </p>
            {showLink && <button onClick={handleSubmit}>Detalhes</button>}
        </div>
    )
};

export default UserCard;