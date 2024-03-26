import React, { Component } from "react";

import WheelHubLogo from "../src/assets/img/Logotipo-Vertical-Verde-Alta.png";
import Img1 from "./assets/img/screenshots/1.jpg";
import Img2 from "./assets/img/screenshots/2.jpg";
import Img3 from "./assets/img/screenshots/3.jpg";
import Img4 from "./assets/img/screenshots/4.jpg";
import Img5 from "./assets/img/screenshots/5.jpg";
import Img6 from "./assets/img/screenshots/6.jpg";
import Img7 from "./assets/img/screenshots/7.jpg";
import Img8 from "./assets/img/screenshots/8.jpg";

import Stepper from "./components/Stepper/Stepper";
import { CreateFormContextProvider } from "./context/formContext";

class App extends Component {
  render() {
    return (
      <div className="app">
        <main className="app-content">
          <CreateFormContextProvider>
            <Stepper />
          </CreateFormContextProvider>
        </main>
      </div>
    );
  }
}

export default App;
