

import * as React from "react";
import * as Erikras from "./state/Erikras.bs.js";
import * as FancyApp from "./refs/FancyApp.bs.js";
import * as FollowState from "./twitter/FollowState.bs.js";
import * as NameInputApp from "./refs/NameInputApp.bs.js";
import * as ErikrasUncurried from "./state/ErikrasUncurried.bs.js";

import './App.css';
;

function App(Props) {
  return React.createElement("div", {
              className: "App"
            }, React.createElement(NameInputApp.make, {}), React.createElement("div", undefined, "Forward Refs from Rescript Docs"), React.createElement(FancyApp.make, {}), React.createElement("div", undefined, "Erikras Curried Reducer"), React.createElement(Erikras.make, {}), React.createElement("div", undefined, "Erikras Uncurried Reducer"), React.createElement(ErikrasUncurried.make, {}), React.createElement("div", undefined, "Twitter Follow State"), React.createElement(FollowState.make, {}));
}

var make = App;

export {
  make ,
  
}
/*  Not a pure module */
