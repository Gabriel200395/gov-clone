import "../../Styles/Navbar.css";
import Drop from "./Drop";
import { useContext } from "react";
import { CreateContextGlobal } from "../../ContextGlobal/ContextGlobal";

function Navbar() {
  const { mudarTema, cor } = useContext(CreateContextGlobal);

  return (
    <section className="content-navbar">
      <header>
        <nav className="navbar">
          <div className="logo">
            <img src="./img/govbr-logo-large.png" />
            <span>Secretaria Geral da Presidência da República</span>
          </div>
          <ul className="menu">
            <li>
              <a
                href="https://www.gov.br/pt-br/orgaos-do-governo"
                target="_blank"
              >
                Órgãos do Governo
              </a>
            </li>
            <li>
              <a
                href="https://www.gov.br/acessoainformacao/pt-br"
                target="_blank"
              >
                Acesso à Informação
              </a>
            </li>
            <li>
              <a href="http://www4.planalto.gov.br/legislacao/" target="_blank">
                Legislação
              </a>
            </li>
            <li>
              <a
                href="https://www.gov.br/governodigital/pt-br/acessibilidade-digital"
                target="_blank"
              >
                Acessibilidade
              </a>
            </li>
            <li>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className="fas fa-adjust" onClick={mudarTema}></span>
                <a
                  href="https://sso.acesso.gov.br/login?client_id=contas.acesso.gov.br&authorization_id=177bc85a90e"
                  target="_blank"
                >
                  <button
                    style={{
                      background: cor ? "#0c326f" : "",
                      color: cor ? "white" : "",
                    }}
                  >
                    <i id="user" className="fas fa-user"></i>
                    entrar
                  </button>
                </a>
              </div>
            </li>
          </ul>
        </nav>
        <div>
          <Drop />
        </div>
      </header>
    </section>
  );
}

export default Navbar;
