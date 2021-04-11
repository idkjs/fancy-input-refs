

import * as React from "react";

function getText(state) {
  if (state !== 1) {
    if (state >= 3) {
      return "Follow";
    } else {
      return "Following";
    }
  } else {
    return "Unfollow";
  }
}

function getStyle(state) {
  switch (state) {
    case /* Following */0 :
        return /* Highlight */0;
    case /* FollowingHover */1 :
        return /* Danger */1;
    case /* NotFollowing */3 :
        return /* None */3;
    case /* FollowingNeverMouseOut */2 :
    case /* NotFollowingHover */4 :
        return /* Hover */2;
    
  }
}

function machine(state, $$event) {
  switch (state) {
    case /* Following */0 :
        switch ($$event) {
          case /* Click */0 :
              return /* NotFollowing */3;
          case /* MouseOver */1 :
              return /* FollowingHover */1;
          case /* MouseOut */2 :
              return state;
          
        }
    case /* FollowingHover */1 :
        switch ($$event) {
          case /* Click */0 :
              return /* NotFollowingHover */4;
          case /* MouseOver */1 :
              return state;
          case /* MouseOut */2 :
              return /* Following */0;
          
        }
    case /* FollowingNeverMouseOut */2 :
        switch ($$event) {
          case /* Click */0 :
              return /* NotFollowingHover */4;
          case /* MouseOver */1 :
              return state;
          case /* MouseOut */2 :
              return /* Following */0;
          
        }
    case /* NotFollowing */3 :
        switch ($$event) {
          case /* Click */0 :
              return /* Following */0;
          case /* MouseOver */1 :
              return /* NotFollowingHover */4;
          case /* MouseOut */2 :
              return state;
          
        }
    case /* NotFollowingHover */4 :
        switch ($$event) {
          case /* Click */0 :
              return /* FollowingNeverMouseOut */2;
          case /* MouseOver */1 :
              return state;
          case /* MouseOut */2 :
              return /* NotFollowing */3;
          
        }
    
  }
}

function reducer(state, $$event) {
  return machine(state, $$event);
}

function FollowState(Props) {
  React.useReducer(reducer, /* NotFollowing */3);
  return React.createElement(React.Fragment, undefined, "Count:" + String(1));
}

var make = FollowState;

export {
  getText ,
  getStyle ,
  machine ,
  reducer ,
  make ,
  
}
/* react Not a pure module */
