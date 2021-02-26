import "../../Styles/Formulario.css";
import Button from "../ElementsForm/Button";
import InformacaoUser from "../ElementsForm/InformacaoUser";
import Input from "../ElementsForm/Input";
import Select from "../ElementsForm/Select";
import Titulo from "../ElementsForm/Titulo";
import { useContext } from "react";
import { CreateContextGlobal } from "../../ContextGlobal/ContextGlobal";

function Formulario() {
  const { handleSubmit } = useContext(CreateContextGlobal);

  return (
    <main className="container-form">
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="content-form">
          <div className="content-titulo">
            <Titulo titulo="Selecione o layout desejado para documento" />
          </div>
          <p>
            layout selecionado: pagina simples <i className="fas fa-edit"></i>
          </p>
          <div className="input-form">
            <Input type="text" placeholder="Selecionar layout" />
          </div>
        </div>

        <div className="content-form">
          <Titulo titulo="Tipo de papel, orientação, largura e altura" />
          <div className="input-form-elements">
            <Select option="papel padrão A4" />
            <Select option="orientação Retrato" />
            <Input type="number" placeholder="210.000 mm" />
            <Input type="number" placeholder="290.000 mm" />
          </div>
        </div>

        <div className="content-form">
          <Titulo titulo="Margem esquerda, direita, superior e inferior" />
          <div className="input-form-elements">
            <Input type="number" placeholder="14.000 mm" />
            <Input type="number" placeholder="14.000 mm" />
            <Input type="number" placeholder="14.000 mm" />
            <Input type="number" placeholder="14.000 mm" />
          </div>
        </div>

        <div className="content-form">
          <Titulo titulo="Consederar primeira página como capa?" />
          <Button />
        </div>

        <div className="content-form">
          <Titulo titulo="Quantidade previstas de páginas" />
          <div className="input-form">
            <Input type="number" placeholder="150" />
          </div>
        </div>

        <div className="content-form">
          <Titulo titulo="Quantidade de colunas por página e espaçamento entre colunas" />
          <div className="input-form-elements">
            <Input type="number" placeholder="2" />
            <Input type="number" placeholder="2.500 mm" />
          </div>
        </div>

        <div className="content-form">
          <Titulo titulo="Qual será a altura das linhas e espaçamento entre linhas?" />
          <div className="input-form-elements">
            <Input type="number" placeholder="2" />
            <Input type="number" placeholder="1.500 mm" />
          </div>
        </div>

        <div className="content-form">
          <Titulo titulo="Definir automaticamente numeração nas páginas?" />
          <Button />
        </div>

        <div className="content-form">
          <Titulo titulo="Será necessario o uso de sangrias?" />
          <Button />
        </div>

        <div className="content-form">
          <Titulo titulo="Sangria esquerda, direita, superior e inferior" />
          <div className="input-form-elements">
            <Input type="number" placeholder="20.000 mm" />
            <Input type="number" placeholder="0.000 mm" />
            <Input type="number" placeholder="0.000 mm" />
            <Input type="number" placeholder="0.000 mm" />
          </div>
        </div>

        <div className="enviar-dados">
          <div className="cancelar-enviar">
            <p>cancelar</p>
            <button>Avançar</button>
          </div>
        </div>

        <InformacaoUser />
      </form>
    </main>
  );
}

export default Formulario;
