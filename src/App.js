import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    console.log(document.documentElement.dataset);
  };

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.dataset.bsTheme = "light";
    } else {
      document.documentElement.dataset.bsTheme = "dark";
    }
    console.log("theme => ", theme);
  });

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <button
              type="button"
              className="btn btn-dark rounded-pill"
              onClick={changeTheme}
            >
              Cambia
            </button>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col">
            Sint nisi dolore sunt nostrud do incididunt nostrud commodo aliqua
            dolor.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
