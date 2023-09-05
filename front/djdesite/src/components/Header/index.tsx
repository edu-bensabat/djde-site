import House from "../../imgs/house-fill (1).svg";
import "./style.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="main-nav">
        <ul className="main-nav-list">
          <div className="flex-icon">
            <img src={House} alt="home icon" />
            <li>
              <a href="/" className="main-nav-link">
                Home
              </a>
            </li>
          </div>
          <li>
            <a href="/games" className="main-nav-link">
              Jogos
            </a>
          </li>
          <li>
            <a href="/signin" className="main-nav-link">
              Registrar
            </a>
          </li>
          <li>
            <a href="#" className="main-nav-link">
              Meu Perfil
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
