'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import './forms.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de login aqui, você pode enviar as informações para a API, por exemplo
    console.log('Logando:', { email, senha });
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
        <Link href="/Home">
            <button type="submit">Entrar</button>
        </Link>
        <Link href="/Cadastro">
            <button type="submit">Cadastre-se</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
