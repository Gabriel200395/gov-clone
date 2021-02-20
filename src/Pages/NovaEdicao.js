import Navbar from "../Component/Navbar/Navbar";
import SubNavbar from "../Component/SubNavbar/SubNavbar";
import MenuNovaEdicao from "../Component/MenuNovaEdicao/MenuNovaEdicao";
import Formulario from "../Component/Formulario/Formulario";
import Footer from "../Component/Footer/Footer";
import RevisaoFinalizacao from "../Pages/RevisaoFinalizacao";
import { useState } from "react";

function NovaEdicao() {
  const [page, setPage] = useState(true);
  const [cor, setCor] = useState(false);
  const [open, setOpen] = useState(true);

  function mudarTema() {
    setCor(!cor);
  }

  function mudancaPage() {
    setPage(!page);
    window.scrollTo(0, 0);
  }

  function handleSubmit(event) {
    event.preventDefault();
    mudancaPage();
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
      {page ? (
        <section>
          <Navbar mudarTema={mudarTema} cor={cor} menu={menu} open={open} />
          <SubNavbar open={open} />
          <MenuNovaEdicao />
          <Formulario handleSubmit={handleSubmit} />
          <Footer />
        </section>
      ) : (
        <RevisaoFinalizacao mudancaPage={mudancaPage} />
      )}
    </div>
  );
}

export default NovaEdicao;
