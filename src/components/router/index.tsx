// src/components/router/index.tsx
import { useState } from "react";
import About from "../../pages/about/About";
import Home from "../../pages/home/Home";
import Todo from "../../pages/todo/index";
import './styles.css'; // Importa o arquivo CSS

enum RouterPages {
    'home' = 'home',
    'todo' = 'todo',
    'sobre' = 'sobre'
}

const Router = () => {
    const [getPaginaAtual, setPaginaAtual] = useState<RouterPages>(RouterPages.home);

    const renderizarBotoes = () => (
        <div className="button-container">
            <button onClick={() => setPaginaAtual(RouterPages.home)}>Início</button>
            <button onClick={() => setPaginaAtual(RouterPages.todo)}>Todo</button>
            <button onClick={() => setPaginaAtual(RouterPages.sobre)}>Sobre</button>
        </div>
    );

    const renderizarPagina = () => {
        switch (getPaginaAtual) {
            case RouterPages.home:
                return <Home />;  // Renderiza o componente Home
            case RouterPages.todo:
                return <Todo />;  // Renderiza o componente Todo
            case RouterPages.sobre:
                return <About />;  // Renderiza o componente About
            default:
                return <Home />;  // Renderiza o componente Home por padrão
        }
    };

    return (
        <div>
            {renderizarBotoes()}
            {renderizarPagina()}
        </div>
    );
};

export default Router;
