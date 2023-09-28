/* eslint-disable react/prop-types */
import { BiMedal } from 'react-icons/bi'
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
            <h2>{name}</h2>
            <h2>{country}</h2>
            <h2>{city}</h2>
            <p>
                <BiMedal /> {favorite_sport}
            </p>
            {showLink && <button onClick={handleSubmit}>Details</button>}
        </div>
    )
};

export default UserCard;