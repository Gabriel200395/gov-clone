import "../../Styles/Footer.css";
function Footer() {
  return (
    <section>
      <footer className="rodape">
        <div className="rodape-content">
          <h3 className="rodape-titulo">Redes socias</h3>
          <div className="redes-socias">
            <a
              className="fab fa-facebook-f"
              href="https://www.facebook.com/govbrdigital"
              target="_blank"
            ></a>
            <a
              className="fab fa-twitter"
              href="https://twitter.com/DigitalGovBr"
              target="_blank"
            ></a>
            <a
              className="fab fa-instagram"
              href="https://www.instagram.com/digitalgov.br/"
              target="_blank"
            ></a>
            <a
              className="fab fa-youtube"
              href="https://www.youtube.com/user/egovbr"
              target="_blank"
            ></a>
          </div>
        </div>
        <div className="imagens">
          <a href="https://www.gov.br/acessoainformacao/pt-br" target="_blank">
            <img
              className="patria-amada-brasil"
              src="./img/acesso-a-informacao.png"
              alt="acesso-a-informacao"
            />
          </a>
          <a href="https://www.gov.br/pt-br" target="_blank">
            <img
              className="acesso-informacao"
              src="./img/brasil.png"
              alt="brasil"
            />
          </a>
        </div>
      </footer>
      <div className="sub-rodape">
        <p>Todo o conteúdo deste site está publicado sob a licença</p>
        <a
          href="https://creativecommons.org/licenses/by-nd/3.0/deed.pt_BR"
          target="_blank"
        >
          Creative Commons Atribuição-SemDerivações 3.0 Não Adaptada
        </a>
      </div>
    </section>
  );
}

export default Footer;
