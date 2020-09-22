import React from 'react';

import './styles.css';

function Landing(){
  return(
    <div id="page-landing">
      <div id="login-container-background">
        <div id="login-container-content">
          <div id="logo">
            <h1>SPARTAN GYM</h1>
            <p>Fábrica de espartanos</p>
          </div>
          <form>
            <div className="input-block">
              <h2>Bora treinar!</h2>
              <h3>Nome</h3>
              <input
                type="text"
                className="login-input" />
            </div>
            <div className="input-block">
              <h3>Senha</h3>
              <input
                type="password"
                className="login-input" />
            </div>
            <div className="login-options">
              <a href="" id="login-button">Entrar</a>
              <a href="" id="sign-in-button">Quero virar um guerreiro!</a>
            </div>
          </form>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}

export default Landing;