import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navegacion from "./component/Navegacion";
import CrearUsuario from "./component/CrearUsuario";
import ListaUsuario from "./component/ListaUsuario";

function App() {
  return (
    <div className="">
      <Navegacion />
      <div className="container p-4">
        <Routes>
          <Route path="/" element={<ListaUsuario />} />
          <Route path="/CrearUsuario" element={<CrearUsuario />} />
          <Route path="/edit/:id" element={<CrearUsuario />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
