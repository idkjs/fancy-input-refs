type state =
  | Following
  | FollowingHover
  | FollowingNeverMouseOut
  | NotFollowing
  | NotFollowingHover
type event = Click | MouseOver | MouseOut
type style = Highlight | Danger | Hover | None

@genType
let getText = (state: state) => {
  switch state {
  | NotFollowing
  | NotFollowingHover => "Follow"
  | FollowingHover => "Unfollow"
  | Following
  | FollowingNeverMouseOut => "Following"
  }
}

@genType
let getStyle = (state: state) => {
  switch state {
  | FollowingHover => Danger
  | Following => Highlight
  | NotFollowing => None
  | NotFollowingHover
  | FollowingNeverMouseOut => Hover
  }
}


@genType
let machine = (. state:state, event: event) =>
  switch state {
    | NotFollowing => switch (event) {
      | Click => Following
      | MouseOver => NotFollowingHover
      | MouseOut => state
    }
    | NotFollowingHover => switch event {
      | Click => FollowingNeverMouseOut
      | MouseOut => NotFollowing
      | MouseOver => state
    }
    | FollowingNeverMouseOut => switch event {
      | Click => NotFollowingHover
      | MouseOut => Following
      | MouseOver => state
    }
    | Following => switch event {
      | MouseOver => FollowingHover
      | Click => NotFollowing
      | MouseOut => state
    }
    | FollowingHover => switch event {
      | MouseOut => Following
      | Click => NotFollowingHover
      | MouseOver => state
    }
  }
let reducer = (state, event) => machine(. state, event)

@react.component
let make = () => {
  let (state, event) = React.useReducer(reducer,NotFollowing)



  <>
    {React.string("Count:" ++ Belt.Int.toString(1))}

    // <button type_="button" style="background-color: white; color: black; padding: 15px 40px; font-size: 40px; border: 1px solid rgb(102, 102, 102); border-radius: 15px; cursor: pointer;">{React.string("Follow")}</button>
  </>
}
