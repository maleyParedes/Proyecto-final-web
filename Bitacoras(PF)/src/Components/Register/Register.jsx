import React from "react";
import "./Register.css";
import logo from "../../assets/ingSis.png";
import Paper from "@mui/material/Paper";

function Register() {
  return (
    <div id="body">
      <Paper square elevation={3} id="paper-root">
        <div className="register-container">
          <div className="register-box">
            <img
              src={logo}
              alt="Logo Ingeniería de Sistemas"
              className="logo"
            />
            <h2>Crear cuenta</h2>
            <form>
              <input type="text" placeholder="Usuario" required />
              <input type="password" placeholder="Contraseña" required />
              <button type="submit">Registrarse</button>
            </form>
            <button type="button">Volver</button>
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default Register;
