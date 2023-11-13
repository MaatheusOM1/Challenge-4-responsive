'use client'
export default function Home() {
    return (
      <body>
        <header className="cabecalho">
          <div className="container">
              <input type="checkbox" id="menu" className="container__botao"/>
              <label for="menu" className="container__rotulo">
                  <span className="cabecalho__menu-hamburguer container__imagem"></span>
              </label>
              <ul className="lista-menu">
                  <li className="lista-menu__titulo">Categorias</li>
                  <li className="lista-menu__item"><a href="#" className="lista-menu__link">Financiamento</a></li>
                  <li className="lista-menu__item"><a href="#" className="lista-menu__link">Seguro-Auto</a></li>
                  <li className="lista-menu__item"><a href="#" className="lista-menu__link">Porto Faz</a></li>
                  <li className="lista-menu__item"><a href="#" className="lista-menu__link">Consórcio Auto</a></li>
                  <li className="lista-menu__item"><a href="#" className="lista-menu__link">Financiamento</a></li>
              </ul>
              <img src="images/Porto.png" alt="Logo da PortoSeguro" className="logo"/>
          </div>
  
          <ul className="opcoes">
              <input type="checkbox" id="opcoes-menu" className="opcoes__botao"/>
              <label for="opcoes-menu" className="opcoes__rotulo">
                  <li className="opcoes__item">Categorias</li>
              </label>
              <ul className="lista-menu">
                  <li className="lista-menu__item"><a href="#" className="lista-menu__link">Financiamento</a></li>
                  <li className="lista-menu__item"><a href="#" className="lista-menu__link">Seguro-Auto</a></li>
                  <li className="lista-menu__item"><a href="#" className="lista-menu__link">Porto Faz</a></li>
                  <li className="lista-menu__item"><a href="#" className="lista-menu__link">Consórcio Auto</a></li>
                  <li className="lista-menu__item"><a href="#" className="lista-menu__link">Financiamento</a></li>
              </ul>
              <li className="opcoes__item"><a href="#" className="opcoes__link">Home</a></li>
              <li className="opcoes__item"><a href="#" className="opcoes__link">Contato</a></li>
              <li className="opcoes__item"><a href="#" className="opcoes__link">Integrantes</a></li>
          </ul>
  
          <div className="container">
              <a href="#" className="container__link"><img src="/images/Usuario.svg" alt="Meu Perfil" className="container__imagem" /><p className="container__texto">Meu Perfil</p></a>
          </div>
      </header>
  
  
      <section className="banner">
          <h2 className="banner__titulo">Já sabe por onde começar?</h2>
          <p className="banner__texto">Encontre o que precisa para seu seguro!</p>
          <input type="search" className="banner__pesquisa" placeholder="Qual sua pesquisa?"/>
      </section>
  
  
      <section className="secao">
          <img src="/images/Porto.png" alt="PortoSeguro" className="porto__chatbot"/>
          <div className="secao__container">
              <div className="card">
                  <div className="card__descricao">
                      <div className="descricao">
                          <h3 className="descricao__titulo">Utilize nosso chatbot para resolver
                              seu problema relacionado
                              a guincho da forma mais
                              rapida e eficaz possível!</h3>
                      </div>
                  </div>
                  <div className="card__botoes">
                      <a href="#" className="botoes__ancora">ChatBot!</a>
                  </div>
              </div>
          </div>
      </section>
  
      <section className="secao">
          <div className="secao__container">
              <div className="card">
                  <div className="card__descricao">
                      <div className="descricao">
                          <h2 className="resposta__bot"><img src="/images/Palm angels.svg"/>Olá, como posso ajudar?</h2>
                          <h2 className="resposta__usuario">Preciso de um guincho<img src="/images/Palm angels.svg"/></h2>
                          <h2 className="resposta__bot"><img src="/images/Palm angels.svg"/>Qual a situação do veículo?</h2>
                          <h2 className="resposta__usuario">Grave<img src="/images/Palm angels.svg"/></h2>
                          <h2 className="resposta__bot"><img src="/images/Palm angels.svg"/>Alguma dessas opções ocorreu?</h2>
                      </div>
                  </div>
                  <div className="card__botoes">
                      <a href="#" className="botoes__chatbot">Tombou</a>
                      <a href="#" className="botoes__chatbot">Bateu</a>
                      <a href="#" className="botoes__chatbot">Nenhuma das opções</a>
                  </div>
              </div>
          </div>
      </section>
  
  
      <section className="topicos">
          <h2 className="topicos__titulo">TÓPICOS VISITADOS RECENTEMENTE</h2>
          <ul className="topicos__lista">
              <li className="topicos__item"><a href="#" className="topicos__link">Soluções Para Seu Veículo</a></li>
              <li className="topicos__item"><a href="#" className="topicos__link">Financiamento</a></li>
              <li className="topicos__item"><a href="#" className="topicos__link">Cartão de Crédito</a></li>
              <li className="topicos__item"><a href="#" className="topicos__link">Seguros</a></li>
              <li className="topicos__item"><a href="#" className="topicos__link">Veículos</a></li>
              <li className="topicos__item"><a href="#" className="topicos__link">Reparos</a></li>
              <li className="topicos__item"><a href="#" className="topicos__link">Assinatura</a></li>
          </ul>
      </section>
  
  
      <section className="contato">
          <div className="contato__descricao">
              <h2 className="contato__titulo">Fique por dentro das novidades!</h2>
              <p className="contato__texto">Atualizações de seguros, serviços e muito mais.</p>
          </div>
          <input type="email" placeholder="Cadastre seu e-mail" className="contato__email"/>
      </section>
  
  
      <hr/>
      <h2 className="rodape__titulo">Grupo Pamv</h2>
      <footer className="rodape">
          <div className="card__integrantes">
              <div className="card__descricao-integrantes">
                  <div className="descricao__integrantes">
                      <h3 className="descricao__nome">Breno Giacoppini Câmara</h3>
                      <h2 className="descricao__rm">Procurar RM</h2>
                      <p className="descricao__funcao">Python</p>
                  </div>
                  <img src="/images/BrenoGiacoppini.jpg" alt="Breno Giacoppini Câmara" className="img__integrantes"/>
              </div>
              <div className="card__botoes-integrantes">
                  <a href="#" className="botoes__ancora-integrantes">Saiba Mais</a>
              </div>
          </div>
  
          <div className="card__integrantes">
              <div className="card__descricao-integrantes">
                  <div className="descricao__integrantes">
                      <h3 className="descricao__nome">Felipe Batista Gregório</h3>
                      <h2 className="descricao__rm">RM99985</h2>
                      <p className="descricao__funcao">DataBase & UX</p>
                  </div>
                  <img src="/images/FelipeBatista.jpg" alt="Felipe Batista Gregório" className="img__integrantes"/>
              </div>
              <div className="card__botoes-integrantes">
                  <a href="#" className="botoes__ancora-integrantes">Saiba Mais</a>
              </div>
          </div>
  
          <div className="card__integrantes">
              <div className="card__descricao-integrantes">
                  <div className="descricao__integrantes">
                      <h3 className="descricao__nome">Matheus Oliveira Macedo</h3>
                      <h2 className="descricao__rm">RM551155</h2>
                      <p className="descricao__funcao">Front-End</p>
                  </div>
                  <img src="/images/MatheusOliveira.jpg" alt="Matheus Oliveira Macedo" className="img__integrantes"/>
              </div>
              <div className="card__botoes-integrantes">
                  <a href="#" className="botoes__ancora-integrantes">Saiba Mais</a>
              </div>
          </div>
  
          <div className="card__integrantes">
              <div className="card__descricao-integrantes">
                  <div className="descricao__integrantes">
                      <h3 className="descricao__nome">Victor Freitas Silva</h3>
                      <h2 className="descricao__rm">RM99982</h2>
                      <p className="descricao__funcao">Java</p>
                  </div>
                  <img src="/images/VictorFreitas.jpg" alt="Victor Freitas Silva" className="img__integrantes"/>
              </div>
              <div className="card__botoes-integrantes">
                  <a href="#" className="botoes__ancora-integrantes">Saiba Mais</a>
              </div>
          </div>
  
          <div className="card__integrantes">
              <div className="card__descricao-integrantes">
                  <div className="descricao__integrantes">
                      <h3 className="descricao__nome">Github</h3>
                      <h2 className="descricao__rm">https://github.com/MaatheusOM1/Challenge-3-React</h2>
                      <p className="descricao__funcao">Link para o repósitorio:</p>
                  </div>
              </div>
              <div className="card__botoes-integrantes">
                  <a href="https://github.com/MaatheusOM1/Challenge-3-React" className="botoes__ancora-integrantes">Repositório</a>
              </div>
          </div>
      </footer>
      </body>
    )
  }
  