

import * as React from "react";
import * as FancyApp from "./refs/FancyApp.bs.js";
import * as NameInputApp from "./refs/NameInputApp.bs.js";

import './App.css';
;

function App(Props) {
  return React.createElement("div", {
              className: "App"
            }, React.createElement(NameInputApp.make, {}), React.createElement(FancyApp.make, {}));
}

var make = App;

export {
  make ,
  
}
/*  Not a pure module */
