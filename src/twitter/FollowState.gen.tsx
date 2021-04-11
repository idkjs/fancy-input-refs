/* TypeScript file generated from FollowState.res by genType. */
/* eslint-disable import/first */


const $$toJS540283040: { [key: string]: any } = {"0": "Highlight", "1": "Danger", "2": "Hover", "3": "None"};

const $$toJS644659689: { [key: string]: any } = {"0": "Following", "1": "FollowingHover", "2": "FollowingNeverMouseOut", "3": "NotFollowing", "4": "NotFollowingHover"};

const $$toRE644659689: { [key: string]: any } = {"Following": 0, "FollowingHover": 1, "FollowingNeverMouseOut": 2, "NotFollowing": 3, "NotFollowingHover": 4};

const $$toRE972952197: { [key: string]: any } = {"Click": 0, "MouseOver": 1, "MouseOut": 2};

// @ts-ignore: Implicit any on import
import * as FollowStateBS__Es6Import from './FollowState.bs';
const FollowStateBS: any = FollowStateBS__Es6Import;

// tslint:disable-next-line:interface-over-type-literal
export type state = 
    "Following"
  | "FollowingHover"
  | "FollowingNeverMouseOut"
  | "NotFollowing"
  | "NotFollowingHover";

// tslint:disable-next-line:interface-over-type-literal
export type event = "Click" | "MouseOver" | "MouseOut";

// tslint:disable-next-line:interface-over-type-literal
export type style = "Highlight" | "Danger" | "Hover" | "None";

export const getText: (state:state) => string = function (Arg1: any) {
  const result = FollowStateBS.getText($$toRE644659689[Arg1]);
  return result
};

export const getStyle: (state:state) => style = function (Arg1: any) {
  const result = FollowStateBS.getStyle($$toRE644659689[Arg1]);
  return $$toJS540283040[result]
};

export const machine: (_1:state, _2:event) => state = function (Arg1: any, Arg2: any) {
  const result = FollowStateBS.machine($$toRE644659689[Arg1], $$toRE972952197[Arg2]);
  return $$toJS644659689[result]
};
