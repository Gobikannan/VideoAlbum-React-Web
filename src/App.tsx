import React from "react";
import { connect } from "react-redux";
import HomePageApp from "./containers/home/home.container";

function MainAppComponent() {
  return <HomePageApp />;
}

const App = connect(null, null)(MainAppComponent);

export default App;
