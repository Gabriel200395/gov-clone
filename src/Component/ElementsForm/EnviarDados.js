import React from "react";

function EnviarDados({ texto, informacao }) {
  return (
    <div className="enviar-dados">
      <div className="cancelar-enviar">
        <p>{texto}</p>
        <button>{informacao}</button>
      </div>
    </div>
  );
}

export default EnviarDados;
