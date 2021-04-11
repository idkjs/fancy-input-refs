type state = Idle(int) | Paused(int)
type event = Increment | Decrement | Reset | Pause | Unpause

let initial = Idle(0)

let reducer = (state: state, event: event) =>
  switch (state, event) {
  | (Idle(value), Increment) => Idle(value + 1)
  | (Idle(value), Decrement) => Idle(value - 1)
  | (Idle(_), Reset) => initial
  | (Idle(value), Pause) => Paused(value)
  | (Paused(value), Unpause) => Idle(value)
  | (Idle(_), Unpause)
  | (Paused(_), _) => state
  }

@react.component
let make = () => {
  let (state, dispatch) = React.useReducer(reducer, initial)

  let count = switch state {
  | Idle(value) => value
  | Paused(value) => value
  }

  <>
    {React.string("Count:" ++ Belt.Int.toString(count))}
    <button onClick={_ => dispatch(Decrement)}> {React.string("-")} </button>
    <button onClick={_ => dispatch(Increment)}> {React.string("+")} </button>
    <button onClick={_ => dispatch(Reset)}> {React.string("Reset")} </button>
    <button onClick={_ => dispatch(Pause)}> {React.string("Pause")} </button>
    <button onClick={_ => dispatch(Unpause)}> {React.string("Unpause")} </button>
  </>
}
