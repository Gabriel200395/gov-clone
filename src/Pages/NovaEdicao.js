import Navbar from "../Component/Navbar/Navbar";
import SubNavbar from "../Component/SubNavbar/SubNavbar";
import MenuNovaEdicao from "../Component/MenuNovaEdicao/MenuNovaEdicao";
import Formulario from "../Component/Formulario/Formulario";
import Footer from "../Component/Footer/Footer";
import RevisaoFinalizacao from "../Pages/RevisaoFinalizacao";
import { useContext } from "react";
import { CreateContextGlobal } from "../ContextGlobal/ContextGlobal";

function NovaEdicao() {
  const { cor, page } = useContext(CreateContextGlobal);

  return (
    <div
      style={{
        background: cor ? "#f2f2f2" : "white",
      }}
    >
      {page ? (
        <section>
          <Navbar />
          <SubNavbar />
          <MenuNovaEdicao />
          <Formulario />
          <Footer />
        </section>
      ) : (
        <RevisaoFinalizacao />
      )}
    </div>
  );
}

export default NovaEdicao;
