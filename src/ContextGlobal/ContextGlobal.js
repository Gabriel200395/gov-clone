import { createContext } from "react";
import { useState } from "react";

export const CreateContextGlobal = createContext();

function ContextGlobal({ children }) {
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
    <CreateContextGlobal.Provider
      value={{
        mudancaPage,
        handleSubmit,
        menu,
        mudarTema,
        open,
        cor,
        page,
      }}
    >
      {children}
    </CreateContextGlobal.Provider>
  );
}

export default ContextGlobal;
