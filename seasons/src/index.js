import React from "react";
import ReactDOM from "react-dom";

//  to get the current location we need to call the api of geolocatio site
//  we can configure the locationj properties and re-render the app
//  using the fun we cant re-render the current app the option is class method

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition((position) =>
      console.log(position)
    );

    return <div>Latitude:</div>;
  }
}

//   return <div>Latitude:</div>;

ReactDOM.render(<App />, document.querySelector("#root"));

// window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
// )

// window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(postion),
//     (err) => console.log(err)
// );
