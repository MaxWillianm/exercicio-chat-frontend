
import React, { useState } from "react";

const Cadastro = ({ onCadastroConcluido }) => {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [confirmarEmail, setConfirmarEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onCadastroConcluido({
      nomeCompleto,
      celular,
      email,
      senha,
    });
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg max-w-lg w-full">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        <h1 className="text-center mb-5 font-bold text-gray-800">Cadastro para CHAT</h1>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-semibold mb-1">Nome Completo:</label>
          <input
            type="text"
            value={nomeCompleto}
            onChange={(e) => setNomeCompleto(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-semibold mb-1">Celular:</label>
          <input
            type="tel"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-semibold mb-1">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-semibold mb-1">Confirmar Email:</label>
          <input
            type="email"
            value={confirmarEmail}
            onChange={(e) => setConfirmarEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-semibold mb-1">Senha:</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-semibold mb-1">Confirmar Senha:</label>
          <input
            type="password"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white rounded-full py-2 px-8 transition-all hover:bg-green-700"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default Cadastro;
