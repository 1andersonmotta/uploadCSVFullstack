/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs'
import { FaCity } from 'react-icons/fa'
import { BiWorld, BiMedal } from 'react-icons/bi'

import './UserDetails.css'

const UserDetails = ({ user }) => {
    const history = useNavigate();
    function goBack() {
        history(-1);
    }

    return (
        <div className="user-page">
            <div className="info">
                <h3>
                    <BsFillPersonFill /> Nome: {user.name}
                </h3>
            </div>
            <div className="info">
                <h3>
                    <BiWorld /> País: {user.country}
                </h3>
            </div>
            <div className="info">
                <h3>
                    <FaCity /> Cidade: {user.city}
                </h3>
            </div>
            <div className="info">
                <h3>
                    <BiMedal /> Esporte Favorito: {user.favorite_sport}
                </h3>
                <p></p>
            </div>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}

export default UserDetails;
