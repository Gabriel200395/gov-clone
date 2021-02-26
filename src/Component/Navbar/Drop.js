import "../../Styles/Drop.css";
import { useContext } from "react";
import { CreateContextGlobal } from "../../ContextGlobal/ContextGlobal";

function Drop() {
  const { open, menu } = useContext(CreateContextGlobal);

  return (
    <div className="topnav">
      <div id="myLinks" style={{ display: open ? "none" : "block" }}>
        <div className="drop-menu">
          <a href="#">item 1</a>
          <a href="#">item 2</a>
          <a href="#">item 3</a>
        </div>
      </div>
      <div className="drop">
        <a href="#Dropmenu" className="icon" onClick={menu}>
          <h4>Imprensa Nacional</h4>
          {open ? (
            <i style={{ fontSize: "25px" }} className="fa fa-bars"></i>
          ) : (
            <i style={{ fontSize: "25px" }} class="fas fa-times"></i>
          )}
        </a>
      </div>
    </div>
  );
}

export default Drop;
