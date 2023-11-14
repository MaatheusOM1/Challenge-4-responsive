'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import './forms.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erroLogin, setErroLogin] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resposta = await fetch('#', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      if (resposta.ok) {
        console.log('Login bem-sucedido!');
        onLogin();
      } else {
        const erroJson = await resposta.json();
        const mensagemErro = erroJson ? erroJson.mensagem : 'Erro desconhecido ao realizar login';
        console.error('Erro ao realizar login:', resposta.status, mensagemErro);
        setErroLogin(mensagemErro);
      }
    } catch (erro) {
      console.error('Erro na requisição de login:', erro);
      setErroLogin('Erro desconhecido ao realizar login');
    }
  };

  return (
    <div className='forms-container'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Senha:
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
        </label>
        {erroLogin && <p className="mensagem-erro">{erroLogin}</p>}
        <button type="submit">Entrar</button>
        <Link href="/Cadastro">
          <button type="button">Cadastre-se</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
