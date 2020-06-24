import React, { Component } from "react";
import "../css/Contact.css";
import "../css/academicons.css";
import { FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";
import { IconContext } from "react-icons";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div id="contactInfo">
        <h3> Vitor Notini Pontes</h3>
        <p>
          Full-stack developer working with Python, Javascript and Progress 4GL
        </p>
        <p> Masters student at the Universidade Federal de Lavras </p>
        <IconContext.Provider value={{ size: "2em" }}>
          <nav>
            <ul>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="http://github.com/notini/">
                  {" "}
                  <FaGithub />{" "}
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/vitornotini/">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a style={{}} target="_blank" rel="noopener noreferrer" href="http://lattes.cnpq.br/8202145341729196">
                {/*<a class="ai ai-lattes" style={{}}></a>*/}
                <i class="ai ai-lattes" style={{verticalAlign: '-20%',
                                                      fontSize: '1.95em'}}></i>
                </a>
              </li>                
              <li>
                <a href="mailto:vitornotini@gmail.com">                  
                  <FaEnvelope />
                </a>
              </li>            
            </ul>
          </nav>
        </IconContext.Provider>
      </div>

    );
  }
}

export default Contact;
