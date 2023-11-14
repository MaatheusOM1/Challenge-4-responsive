'use client'
import React, { useState } from 'react';
import '../forms.css';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resposta = await fetch('http://localhost:8080/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email, senha }),
      });

      if (resposta.ok) {
        console.log('Usuário cadastrado com sucesso!');
        setNome('');
        setEmail('');
        setSenha('');
      } else {
        const erroJson = await resposta.json();
        const mensagemErro = erroJson ? erroJson.mensagem : 'Erro desconhecido ao cadastrar usuário';
        console.error('Erro ao cadastrar usuário:', resposta.status, mensagemErro);

        alert(`Erro ao cadastrar usuário: ${mensagemErro}`);
      }
    } catch (erro) {
      console.error('Erro na requisição de cadastro:', erro);

      let mensagemErroRequisicao = 'Erro desconhecido na requisição de cadastro';
      if (erro instanceof TypeError && erro.message.includes('Failed to fetch')) {
        mensagemErroRequisicao = 'Não foi possível conectar ao servidor. Verifique sua conexão com a internet.';
      }

      console.error(mensagemErroRequisicao);

      alert(mensagemErroRequisicao);
    }
  };

  return (
    <div className="forms-container">
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Senha:
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;

