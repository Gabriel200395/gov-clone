import "../../Styles/Drop.css";
import { useContext } from "react";
import { CreateContextGlobal } from "../../ContextGlobal/ContextGlobal";

function Drop() {
  const { open, menu } = useContext(CreateContextGlobal);

  return (
    <div className="topnav container col-md-12">
      <div id="myLinks" style={{ display: open ? "none" : "block" }}>
        <div className="drop-menu">
          <a href="#">item 1</a>
          <a href="#">item 2</a>
          <a href="#">item 3</a>
        </div>
      </div>
      <div className="drop">
        <div className="icon" onClick={menu}>
          {open ? (
            <i style={{ fontSize: "25px" }} className="fa fa-bars"></i>
          ) : (
            <i style={{ fontSize: "25px" }} class="fas fa-times"></i>
          )}
          <h4>Imprensa Nacional</h4>
        </div>
      </div>
    </div>
  );
}

export default Drop;
