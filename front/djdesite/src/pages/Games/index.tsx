import React from "react";
import "./style.css";
import House from "../../imgs/house-fill (1).svg";
import Header from "../../components/Header";

export default function Games() {
  return (
    <div className="games-body">
      <div className="games-background">
        <Header></Header>
        
        <section className="games-section-game">
          <h1 className="games-game-title">JOGOS</h1>
          <div className="games-game">
            <div className="games-grid-game">
              <div className="games-game-panel"></div>
              <div className="games-game-panel"></div>
              <div className="games-game-panel"></div>
              <div className="games-game-panel"></div>
              <div className="games-game-panel"></div>
              <div className="games-game-panel"></div>
              <div className="games-game-panel"></div>
              <div className="games-game-panel"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
