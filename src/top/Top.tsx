import React from "react";
import './style.css';

const Top = () => {
    return (
        <body>
            <div className="header">
                <h1 className="test">Meu Portfólio</h1>
                <div className="about">
                    <h2 className="sobre" onClick={() => console.log('Teste')}>sobre</h2>
                    <h2>Projetos</h2>
                    <h2>Skills</h2>
                    <h2>Contato</h2>
                </div>
            </div>
        </body>
    );
}

export default Top;
