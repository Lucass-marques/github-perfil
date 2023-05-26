import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import Repos from "./components/Repos";

function App() {
  const [formularioIsVisivel, setFormularioIsVisivel] = useState(false);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario= {nomeUsuario} />
          <Repos nomeUsuario= {nomeUsuario} />
        </>
      )}

    {formularioIsVisivel && (
      <Formulario />
    )}

    </>
  )
}

export default App
