import React from 'react';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <h1>Bem-vindo ao Todo List</h1>
            <p>O Todo List é uma ferramenta simples e eficaz para organizar suas tarefas diárias. Com ele, você pode adicionar novas tarefas, marcar as tarefas concluídas e gerenciar suas atividades de maneira eficiente.</p>
            <p>Essa aplicação ajuda você a manter o foco e a produtividade, garantindo que você esteja sempre em dia com suas responsabilidades.</p>
        </div>
    );
};

export default Home;
