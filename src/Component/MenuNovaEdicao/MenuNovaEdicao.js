import "../../Styles/MenuNovaEdicao.css";

function MenuNovaEdicao() {
  return (
    <section className="content-nova-edicao">
      <div className="content">
        <i className="fas fa-file" id="icon"></i>
        <h1 className="titulo">Nova Ediçao</h1>
      </div>
      <div className="menu-pagina-nova-edicao">
        <span>1</span>
        <div className="border"></div>
        <span>2</span>
      </div>
      <div className="numero-pagina-nova">
        <p>Nova ediçāo</p>
        <p>Revisão e finalizaçāo</p>
      </div>
    </section>
  );
}

export default MenuNovaEdicao;
