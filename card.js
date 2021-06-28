import React, { component } from "react";

const cards = (props) => {
    // const { name, email , id } = props;
    return ( <
        div  className='bg-light-green dib br3 pa3 ma2 grow'     >
        <
        img alt = 'robots'
        src = {'https://robohash.org/${props.id}?200*200'} / >
        <
        div >
        <
        h2 > {props.name} < /h2> <
        p > {props.email} < /p> < /
        div > <
        /div>
    );
}

export default cards;