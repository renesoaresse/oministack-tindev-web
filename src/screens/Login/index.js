import React, { useState } from "react";
import api from "../../services/api";
import logo from "../../assets/logo.svg";
import "./styles.css";

export default function Login({ history }) {
  const [username, setUsername] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (username === "") return;

    const response = await api.post("/devs", { username });

    if (response.status !== 200) return;

    const { _id } = response.data;

    console.log(response.status);

    history.push(`/home/${_id}`);
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev" />
        <input
          placeholder="Digite seu usuário no GitHub."
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
