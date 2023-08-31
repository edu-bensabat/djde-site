import React from "react";
import "./style.css";
import House from "../../imgs/house-fill (1).svg";
import HomePhoto from "../../imgs/home-photo.jpeg";
import Header from "../../components/Header";

export default function Home() {
  return (
    <div className="background">
      <Header></Header>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-img-box">
            <img src={HomePhoto} className="hero-img" alt="logo do djde" />
          </div>
        </div>
      </section>
      <section className="section-cta">
        <div className="container">
          <div className="cta">
            <div className="cta-text-box">
              <form className="cta-form" action="#">
                <div>
                  <h2 className="label">Nome de Usuário</h2>
                  <input
                    id="full-name"
                    type="text"
                    placeholder="usuario"
                    required
                  />
                </div>

                <div>
                  <h2 className="label">Senha</h2>
                  <input
                    id="password"
                    type="password"
                    placeholder="senha"
                    required
                  />
                </div>
                <button className="btn btn--form">Acessar</button>
              </form>
              <div className="flex">
                <a href="#" className="coisa">
                  Criar Conta
                </a>
                <a href="#" className="coisa">
                  Esqueci a Senha
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
