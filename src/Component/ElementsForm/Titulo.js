function Titulo(props) {
  const { titulo } = props;
  return (
    <div className="content-titulo">
      <h4>{titulo}</h4>
      <i id="icon-question" className="fas fa-question"></i>
    </div>
  );
}

export default Titulo;
