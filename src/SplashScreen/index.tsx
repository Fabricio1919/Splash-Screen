import { useState } from "react";
import logo from "./react.png";
import "./index.css";

export function SplashScreen() {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div className="style">
      <div className={`logo-container ${loaded ? "loaded" : ""}`}>
        <img
          src={logo}
          alt="Logo da Enablers"
          className="logo"
          onLoad={handleImageLoad}
        />
      </div>
    </div>
  );
}
