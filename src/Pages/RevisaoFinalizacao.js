import Navbar from "../Component/Navbar/Navbar";
import SubNavbar from "../Component/SubNavbar/SubNavbar";
import MenuRevisaoFinalizacao from "../Component/MenuRevisaoFinalizacao/MenuRevisaoFinalizacao";
import Footer from "../Component/Footer/Footer";
import { useState } from "react";

function RevisaoFinalizacao() {
  const [cor, setCor] = useState(false);
  const [open, setOpen] = useState(true);

  function mudarTema() {
    setCor(!cor);
  }

  function menu() {
    setOpen(!open);
  }

  return (
    <div
      style={{
        background: cor ? "#f2f2f2" : "white",
      }}
    >
      <section>
        <Navbar mudarTema={mudarTema} cor={cor} menu={menu} open={open} />
        <SubNavbar open={open} />
        <MenuRevisaoFinalizacao />
        <Footer />
      </section>
    </div>
  );
}

export default RevisaoFinalizacao;
