%%raw(`import './App.css';`)

// @bs.module("./logo.svg") external logo: string = "default"

@react.component
let make = () => {
  <div className="App">
    <NameInputApp />
    <div> {React.string("Forward Refs from Rescript Docs")} </div>
    <FancyApp />
    <div> {React.string("Erikras Curried Reducer")} </div>
    <Erikras />
    <div> {React.string("Erikras Uncurried Reducer")} </div>
    <ErikrasUncurried />
  </div>
}
