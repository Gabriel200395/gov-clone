import "../../Styles/SubNavbar.css";
import { useContext } from "react";
import { CreateContextGlobal } from "../../ContextGlobal/ContextGlobal";

function SubNavbar() {
  const { open } = useContext(CreateContextGlobal);

  return (
    <section className="sub-navbar">
      {open ? (
        <div className="sobre-pages">
          <div className="submenus">
            <a href="/">
              <i className="fas fa-home"></i>
            </a>
            <i className="fas fa-chevron-right"></i>
            <span>Nome da plataforma</span>
            <i className="fas fa-chevron-right"></i>
            <a href="/">
              <span>Nova ediçāo</span>
            </a>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default SubNavbar;
