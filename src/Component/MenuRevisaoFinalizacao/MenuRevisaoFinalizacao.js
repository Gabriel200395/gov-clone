import "../../Styles/RevisaoFinalizacao.css";
import Button from "../ElementsForm/Button";
import InformacaoUser from "../ElementsForm/InformacaoUser";
import Input from "../ElementsForm/Input";
import Titulo from "../ElementsForm/Titulo";
import "../../Styles/Formulario.css";
import { useState } from "react";

function MenuRevisaoFinalizacao() {
  const [finalizar, setFinalizar] = useState(true);

  function endUser(event) {
    event.preventDefault();
    setFinalizar(!finalizar);
  }

  return (
    <section>
      <section className="revisao-finalizacao">
        <div className="content">
          <i className="fas fa-file" id="icon"></i>
          <h1 className="titulo">Nova Ediçao</h1>
        </div>
        <div className="menu-pagina-nova-edicao">
          <span>1</span>
          <div className="border"></div>
          <span>2</span>
        </div>
        <div className="numero-revisao-finalizacao">
          <p>Nova ediçāo</p>
          <p>Revisão e finalizaçāo</p>
        </div>
      </section>

      <section className="container-informacao">
        <h2>Revisão das informações do modelo</h2>

        <div className="container-informacao-conteudo-1">
          <div className="column-1">
            <p>Layout selecionado:</p>
            <ul>
              <li>Página simples</li>
            </ul>

            <p>Tipo de papel, orientação, largura e altura:</p>
            <ul>
              <li>Papel padrão A4</li>
              <li>Orientação em Retrato</li>
              <li>Largura de 210mm</li>
              <li>Altura de 290mm</li>
            </ul>

            <p>Margem esquerda, direita,superior e inferior:</p>
            <ul>
              <li>Margem esquerda 14 mm</li>
              <li>Margem direita 14 mm</li>
              <li>Margem superior 14 mm</li>
              <li>Margem inferior 14 mm</li>
            </ul>
            <p>Quantidade de colunas por página e espaçamento entre colunas:</p>
            <ul>
              <li>Quantidade de colunas 2</li>
              <li>Espacamento entre colunas 2.500mm</li>
            </ul>
          </div>

          <div className="column-2">
            <p>Qual será altura das linhas e o espaçamento entrelinhas</p>

            <ul>
              <li>Alturas das linhas 2.000mm</li>
              <li>Espaçamento entrelinhas 1.500mm</li>
            </ul>

            <p>Considerar primeira página como capa?</p>
            <ul>
              <li>Sim</li>
            </ul>

            <p>Quantidades prevista de páginas</p>
            <ul>
              <li>150 páginas</li>
            </ul>

            <p>Definir automaticamente numeração nas páginas</p>
            <ul>
              <li>Sim</li>
            </ul>

            <p>Sangria esquerda, direita, superior e inferior:</p>
            <ul>
              <li>Sangria esquerda 20mm</li>
              <li>Sangria direita 0mm</li>
              <li>Sangria superior 0mm</li>
              <li>Sangria inferior 0mm</li>
            </ul>
          </div>
        </div>
      </section>

      {/* formulario*/}

      <main className="container-form">
        {finalizar ? (
          <form className="formulario">
            <div className="content-form">
              <Titulo titulo="Data de publicação?" />
              <div className="input-form-elements">
                <Input type="date" />
              </div>
            </div>

            <div className="content-form">
              <Titulo titulo="Definir como modelo?" />
              <Button />
            </div>

            <div className="content-form">
              <Titulo titulo="Nome da edicāo?" />
              <div className="input-form-elements">
                <Input type="text" placeholder="modelo de exemplo" />
              </div>
            </div>

            <div className="enviar-dados">
              <div className="cancelar-enviar">
                <a href="/">
                  <p>voltar e editar</p>
                </a>
                <button onClick={endUser}>Finalizar</button>
              </div>
            </div>
            <InformacaoUser />
          </form>
        ) : (
          <div className="finalizar">
            <h1>Cadastro Finalizado.</h1>
          </div>
        )}
      </main>
    </section>
  );
}

export default MenuRevisaoFinalizacao;
