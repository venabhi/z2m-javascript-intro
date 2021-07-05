// import logo from './logo.svg';
import react, { component } from 'react';
// import particles from 'react-particles-js'
import navigation from './components/navigation/nav.js';
import clarifai from 'clarifai';
import face from './components/face/face.j';
import logo from './components/logo/logo.js';
import './App.css';
import imagelinkform from './components/imagelinkform/imagelinkform.js';
import rank from './components/rank/rank.js';


const app = new clarifai.app({
        apikey: "8543387847094388802bcd35ade805a0"
    }

);


// function App() {
//     return ( <
//         div className = "App" >
//         <
//         header className = "App-header" > { /* <img src={logo} className="App-logo" alt="logo" /> */ } <
//         p >
//         Edit < code > src / App.js < /code> and save to reload. < /
//         p > <
//         a className = "App-link"
//         href = "https://reactjs.org"
//         target = "_blank"
//         rel = "noopener noreferrer" >
//         Learn React <
//         /a> < /
//         header > <
//         /div>
//     );
// }
// const particlesOp = {
//     paramet: {
//         line_linked: {
//             shadow: {
//                 enable: true,
//                 color: "#3CA9D1",
//                 blur: 5
//             }
//         }
//     }
// }
class App extends component {
    constructor() {
        super();
        this.state = {
            input: '',
            imageurl: '',
            box: '',
        }
    }
    oninputChange = (event) => {
        console.log(event.target.value);
    }
    onsubmit = () => {
        this.setstate({ imageurl: input });
        app.models.predict(clarifai.COLOR_MODEL, "https://samples.clarifai.com/face-det/jpg")

        .then(

            function(response) {
                console.log(response);
            },

            function(err) {

            }
        );
    }
    render() {
        return ( <
            div className = "App" >


            <
            https: //samples.clarifai.com/face-det/jpg
            navigation / >
            <
            logo / >
            <
            imagelinkform oninputChange = { this.oninputChange }
            onsubmit = { this.onsubmit }
            / > <
            rank / >
            <
            face imageurl = { this.state.imageurl }
            / > < /
            div >
        )
    }
}

export default App;