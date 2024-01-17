import { useEffect, useState } from "react";
import "./App.css";

const data = [
  {
    title: "lorem ipsum",
    description:
      "Sunt eu fugiat laboris Lorem occaecat cupidatat ad irure elit enim veniam consectetur. Sint ea duis magna Lorem consequat dolor nulla. Laborum incididunt et aliquip qui.",
  },
  {
    title: "amet dolor",
    description:
      "Sunt eu fugiat laboris Lorem occaecat cupidatat ad irure elit enim veniam consectetur. Sint ea duis magna Lorem consequat dolor nulla. Laborum incididunt et aliquip qui.",
  },
  {
    title: "quit est",
    description:
      "Sunt eu fugiat laboris Lorem occaecat cupidatat ad irure elit enim veniam consectetur. Sint ea duis magna Lorem consequat dolor nulla. Laborum incididunt et aliquip qui.",
  },
  {
    title: "eum et est",
    description:
      "Sunt eu fugiat laboris Lorem occaecat cupidatat ad irure elit enim veniam consectetur. Sint ea duis magna Lorem consequat dolor nulla. Laborum incididunt et aliquip qui.",
  },
  {
    title: "nesciunt quas odio",
    description:
      "Sunt eu fugiat laboris Lorem occaecat cupidatat ad irure elit enim veniam consectetur. Sint ea duis magna Lorem consequat dolor nulla. Laborum incididunt et aliquip qui.",
  },
];

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.dataset.bsTheme = "light";
    setTheme("light");
  }, []);

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    changeTheme();
    // console.log(theme);
  };

  const changeTheme = () => {
    let docData = document.documentElement.dataset.bsTheme;
    if (docData === "light") {
      document.documentElement.dataset.bsTheme = "dark";
    } else {
      document.documentElement.dataset.bsTheme = "light";
    }
  };

  return (
    <div className="App">
      <div className="container-sm">
        <div className="row py-3">
          <div className="col d-flex align-items-center justify-content-center">
            <button
              type="button"
              className="btn rounded-pill py-1 px-4 text-uppercase fw-semibold"
              onClick={handleTheme}
            >
              Cambia
            </button>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-4 py-5">
          {data.map((elem, index) => {
            return (
              <>
                <div
                  key={index}
                  className="col"
                >
                  <div className="card card-body rounded-3 border-0 shadow px-4">
                    <h5 className="fw-bold text-capitalize text-center">
                      {elem.title}
                    </h5>
                    <hr className="w-25 mx-auto mt-0 mb-3"></hr>
                    <p className="text-center">{elem.description}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
