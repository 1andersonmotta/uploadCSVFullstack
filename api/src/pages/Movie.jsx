import { useState, useEffect } from "react";
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill
} from 'react-icons/bs'
import { useLocation } from 'react-router-dom';

const Movie = ({ user }) => {
    const location = useLocation();
    const objectData = location.state && location.state.objectData;
    // const [user, setUser] = useState(null);

    // useEffect(() => {
    //     if (objectData) {
    //         setUser(objectData);
    //     }
    // }, [objectData]);
    function loader() {
        console.log('user', user)
        console.log('objectData', objectData)
    }

    console.log('movie data users', user);

    return (
        <div className="movie-page">

            <p className="tagline">nome:{user.name}</p>
            <div className="info">
                <h3>
                    <BsWallet2 /> Orçamento:
                </h3>
                <p>city</p>
            </div>
            <div className="info">
                <h3>
                    <BsGraphUp /> Receita:
                </h3>
                <p>country</p>
            </div>
            <div className="info">
                <h3>
                    <BsHourglassSplit /> Duração:
                </h3>
                <p>sporte</p>
            </div>
            <div className="info description">
                <h3>
                    <BsFillFileEarmarkTextFill /> Descrição:
                </h3>
                <p></p>
                <button onClick={loader}>clicke</button>
            </div>
        </div>
    )
}

export default Movie;
