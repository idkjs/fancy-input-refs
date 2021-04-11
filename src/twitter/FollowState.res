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
