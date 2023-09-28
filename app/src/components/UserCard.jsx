/* eslint-disable react/prop-types */
import { FaStar } from 'react-icons/fa'
import Movie from '../pages/Movie';
// import { Link } from 'react-router-dom';


const UserCard = ({ user }) => {
    console.log('user card', typeof (user))
    const { name, city, country, favorite_sport } = user
    const obj = { ...user }
    console.log('obj', obj);
    return (
        <div className="movie-card">
            <h2>{name}</h2>
            <h2>{city}</h2>
            <h2>{country}</h2>
            <p>
                <FaStar /> {favorite_sport}
            </p>
            {/* {showLink && <Link to={{ pathname: `/user`, state: { objectData:  user  } }}>Detalhes</Link>} */}
            {/* {<Link to={{ pathname: `/movie`, state: { objectData: obj } }}>Detalhes</Link>} */}
            <Movie user={user} />
        </div>
    )
};

export default UserCard;