import { Link } from "react-router-dom";
import "../styles/globals.css";

export default function Home() {
  return (
    <div className="fullpage-root">
      <Link to="/digimon" className="fullpage-strip left">
        <img src="/src/assets/digimon.gif" className="hover-gif left-gif" />
        <div className="panel-content">
          <h2>Digimon</h2>
        </div>
      </Link>

      <div className="fullpage-strip center">
        <div className="panel-content">
          <h2>ASH & TAI</h2>
          <h4>ESCOLHE OS TEUS FAVORITOS</h4>

          <h4>AQUI APREES ODOS OS FAVORIOTS</h4>
        </div>
      </div>

      <Link to="/pokemon" className="fullpage-strip right">
        <img src="/src/assets/pokemon.gif" className="hover-gif right-gif" />
        <div className="panel-content">
          <h2>Pokémon</h2>
        </div>
      </Link>
    </div>
  );
}
