import react from 'react';
import Tilt from 'react-tilt'
import './logo.css'
import cat from './cat.png'

const logo = () => {
    return ( <
        div className = 'ma4' >
        <
        Tilt className = "Tilt br2 shadow-2"
        options = {
            { max: 25 }
        }
        style = {
            { height: 150, width: 150 }
        } >
        <
        div className = "Tilt-inner pa3" > < img style = {
            { paddingTop: '5px' }
        }
        alt = 'logo'
        src = { cat }
        /> < /div > < /
        Tilt >

        <
        /div>
    );
}

export default logo;


// <paricles className="papa"
//     particles={{
//        varaiale name 
//    }}