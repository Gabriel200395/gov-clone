import "../../Styles/Formulario.css";

function Select({ option }) {
  return (
    <select className="select">
      <option value="volvo">{option}</option>
      <option value="saab">item 1</option>
      <option value="opel">item 2</option>
      <option value="audi">item 3</option>
    </select>
  );
}

export default Select;
