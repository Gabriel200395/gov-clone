import Navbar from "../Component/Navbar/Navbar";
import SubNavbar from "../Component/SubNavbar/SubNavbar";
import MenuRevisaoFinalizacao from "../Component/MenuRevisaoFinalizacao/MenuRevisaoFinalizacao";
import Footer from "../Component/Footer/Footer";
import { useContext } from "react";
import { CreateContextGlobal } from "../ContextGlobal/ContextGlobal";

function RevisaoFinalizacao() {
  const { cor } = useContext(CreateContextGlobal);

  return (
    <div
      style={{
        background: cor ? "#f2f2f2" : "white",
      }}
    >
      <section>
        <Navbar />
        <SubNavbar />
        <MenuRevisaoFinalizacao />
        <Footer />
      </section>
    </div>
  );
}

export default RevisaoFinalizacao;
