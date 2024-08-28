import React from 'react';
import './About.css';
import myPhoto from './avatar.jpg';
const About: React.FC = () => {
    return (
        <div className="about-container">
            <h1>Sobre o Desenvolvedor</h1>
            <img src={myPhoto} alt="Gustavo Henrique Adoryan" width="150" />
            <h2>Gustavo Henrique Adoryan</h2>
            <p><strong>Profissão:</strong> Analista de Dados</p>
            <p>Sou um Engenheiro de Software em formação, gosto muito da parte de desenvolvimento backend. Atualmente trabalho como Analista de Dados, utilizando Python, Scrapy e MongoDB para Web Scrap.</p>
            <p>Confira meu <a href="https://github.com/GustavoAdoryan">GitHub</a>.</p>
        </div>
    );
};

export default About;
