import React, { useContext } from 'react';
import Countries from '../components/Countries';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import { UserContext } from '../components/UserContext';
import Connexion from '../components/Connexion';
const Home = () => {
    const { user, setUser } = useContext(UserContext);

    if (user === null) {
        return (
            <div>
                <Logo />
                <Navigation />
                <Connexion />
            </div>
        );
    } else {
        return (
            <div>
                <Logo />
                <p>Bonjour {user}</p>
                {user ? (
                    <button onClick={() => {
                        setUser(null)
                    }}> logout</button>
                ) : (
                    <button onClick={async () => {
                        setUser(user);
                    }}>
                        Login
                    </button>
                )}
                <Navigation />
                <Countries />
            </div>
        );
    }
};

export default Home;