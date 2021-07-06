import React from "react";
import ReactDOM from "react-dom";

//  to get the current location we need to call the api of geolocatio site

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );

  return <div>Hi there</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
