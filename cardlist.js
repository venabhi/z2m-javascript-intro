import React, { component } from "react";
import card from './card';


const cardlist = ({ robots }) => {
    const allusers = robots.map((user, i) => {
        return ( <
            card key = { i }
            id = { robots[i].id }
            name = { robots[i].name }
            email = { robots[i].email }
            />
        );

    })
    return ( <
        div > { allusers } <
        /
        div >
    );
}
export default cardlist;