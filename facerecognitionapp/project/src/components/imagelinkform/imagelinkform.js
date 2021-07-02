import react from 'react';
import './imagelink.css'

const imagelinkform = ({ oninputChange, onsubmmit }) => {
    return ( <
        div >
        <
        p className = 'f3' > { 'this will be the logo ' } <
        /p> <
        div className = 'center' >
        <
        div className = 'center br3 shadow-5' >
        <
        input className = ' form f4 pa2 w-70 center'
        type = 'text'
        onchange = { oninputChange }
        / > <
        button className = 'w-30 grow f4 link pa3 dib white bg-light-purple'
        onsubmit = { onsubmit } > detect < /button> < /
        div >

        <
        /div > < /
        div >

    );
}