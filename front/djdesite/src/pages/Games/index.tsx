import React from "react";
import "./style.css";
import House from "../../imgs/house-fill (1).svg";
import Header from "../../components/Header";

export default function Games() {
  return (
    <div className="background">
      <Header></Header>
      
      <section className="section-game">
        <h1 className="game-title">JOGOS</h1>
        <div className="game">
          <div className="grid-game">
            <div className="jogos-painel"></div>
            <div className="jogos-painel"></div>
            <div className="jogos-painel"></div>
            <div className="jogos-painel"></div>
            <div className="jogos-painel"></div>
            <div className="jogos-painel"></div>
            <div className="jogos-painel"></div>
            <div className="jogos-painel"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
