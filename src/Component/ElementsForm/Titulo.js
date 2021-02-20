function Titulo(props) {
  const { titulo } = props;
  return (
    <div className="content-titulo">
      <h2>{titulo}</h2>
      <i id="icon-question" className="fas fa-question"></i>
    </div>
  );
}

export default Titulo;
