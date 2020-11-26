import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { linkedinSquare } from 'react-icons-kit/fa/linkedinSquare';
import { github } from 'react-icons-kit/fa/github';
import foto from './foto.jpeg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="container">
        <div id="header" className="box-shadow">
          <span>Joel Luís</span>
          <span>joel-luis@hotmail.com</span>
        </div>

        <div id="main">
          <div className="box box-shadow">
            <img src={foto} />
            <span className="tit">Joel Luís Silva</span>
            <span className="subtit">Frontend Developer</span>

            <div className="contacts">
              <a
                href="https://github.com/joel-luis"
                style={{ color: '#6547a0' }}
              >
                <div style={{ width: 70, height: 70 }}>
                  <Icon size={'100%'} icon={github} />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/joel-luiss/"
                style={{ color: '#326d98' }}
              >
                <div style={{ width: 70, height: 70 }}>
                  <Icon size={'100%'} icon={linkedinSquare} />
                </div>
              </a>
            </div>
            <div className="summary">
              <p>
              Entusiamado com tecnologia desde pequeno, sou um desenvolvedor 
              muito focado em aplicações Frontend.
              </p>
              <p>
                D Tenho 5 anos de experiência, atualmente venho me aprimorando na 
                stack Javascript, ReactJS, Git, MySQL, HTML 5 e CSS 3. 
                Além de projetos reais estou sempre trabalhando em projetos 
                como estudo para aprimorar meus conhecimentos e contribuir com 
                soluções modernas.
              </p>
            </div>

            <br />
            <span className="txt-skills">MINHAS HABILIDADES</span>
            <div className="skills">
              <span>ReactJS</span>
              <span>Javascript</span>
              <span>NodeJS</span>
              <span>TypeScript</span>
              <span>MysSQL</span>
              <span>HTML 5</span>
              <span>CSS 3</span>
              <span>Docker</span>
              <span>Git / GitFlow</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
