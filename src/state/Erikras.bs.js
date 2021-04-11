

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";

var initial = {
  TAG: /* Idle */0,
  _0: 0
};

function reducer(state, $$event) {
  if (state.TAG !== /* Idle */0) {
    if ($$event >= 4) {
      return {
              TAG: /* Idle */0,
              _0: state._0
            };
    } else {
      return state;
    }
  }
  var value = state._0;
  switch ($$event) {
    case /* Increment */0 :
        return {
                TAG: /* Idle */0,
                _0: value + 1 | 0
              };
    case /* Decrement */1 :
        return {
                TAG: /* Idle */0,
                _0: value - 1 | 0
              };
    case /* Reset */2 :
        return initial;
    case /* Pause */3 :
        return {
                TAG: /* Paused */1,
                _0: value
              };
    case /* Unpause */4 :
        return state;
    
  }
}

function Erikras(Props) {
  var match = React.useReducer(reducer, initial);
  var dispatch = match[1];
  var state = match[0];
  console.log("STATE", state);
  return React.createElement(React.Fragment, undefined, "Count:" + String(state._0), React.createElement("button", {
                  onClick: (function (param) {
                      return Curry._1(dispatch, /* Decrement */1);
                    })
                }, "-"), React.createElement("button", {
                  onClick: (function (param) {
                      return Curry._1(dispatch, /* Increment */0);
                    })
                }, "+"), React.createElement("button", {
                  onClick: (function (param) {
                      return Curry._1(dispatch, /* Reset */2);
                    })
                }, "Reset"), React.createElement("button", {
                  onClick: (function (param) {
                      return Curry._1(dispatch, /* Pause */3);
                    })
                }, "Pause"), React.createElement("button", {
                  onClick: (function (param) {
                      return Curry._1(dispatch, /* Unpause */4);
                    })
                }, "Unpause"));
}

var make = Erikras;

export {
  initial ,
  reducer ,
  make ,
  
}
/* react Not a pure module */
