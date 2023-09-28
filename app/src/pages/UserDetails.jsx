/* eslint-disable react/prop-types */
import { BsFillPersonFill } from 'react-icons/bs'
import { FaCity } from 'react-icons/fa'
import { BiWorld, BiMedal } from 'react-icons/bi'
import './UserDetails.css'

const UserDetails = ({ user }) => {
    return (
        <div className="user-page">
            <div className="info">
                <h3>
                    <BsFillPersonFill /> Name: {user.name}
                </h3>
            </div>
            <div className="info">
                <h3>
                    <BiWorld /> Country: {user.country}
                </h3>
            </div>
            <div className="info">
                <h3>
                    <FaCity /> City: {user.city}
                </h3>
            </div>
            <div className="info">
                <h3>
                    <BiMedal /> Favorite Sport: {user.favorite_sport}
                </h3>
                <p></p>
            </div>
        </div>
    )
}

export default UserDetails;
