import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import './styles.css';

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="Ecoleta" />
                </header>

                <main>
                    <h1>Seu marketplace de coleta de resíduos.</h1>
                    <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>

                    <Link to="/create-point">
                        <span><FiLogIn /></span>
                        <strong>Cadastre um ponto de coleta</strong>
                    </Link>
                </main>
            </div>
            <div className="made-by">
                <h2>Made by <a href="https://github.com/araujogabriel77">Gabriel A. Ferreira</a>🌳</h2>
            </div>
        </div>
    );
}

export default Home;